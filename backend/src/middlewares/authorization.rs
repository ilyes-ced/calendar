use actix_web::{
    body::EitherBody,
    dev::{self, Service, ServiceRequest, ServiceResponse, Transform},
    http, Error, HttpResponse,
};
use futures_util::future::LocalBoxFuture;
use jsonwebtoken::{decode, DecodingKey, TokenData, Validation};
use std::future::{ready, Ready};

use crate::models;
use models::claim::Claims;

pub struct CheckLogin;

impl<S, B> Transform<S, ServiceRequest> for CheckLogin
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<EitherBody<B>>;
    type Error = Error;
    type InitError = ();
    type Transform = CheckLoginMiddleware<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(CheckLoginMiddleware { service }))
    }
}
pub struct CheckLoginMiddleware<S> {
    service: S,
}

impl<S, B> Service<ServiceRequest> for CheckLoginMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<EitherBody<B>>;
    type Error = Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    dev::forward_ready!(service);

    fn call(&self, request: ServiceRequest) -> Self::Future {
        // Change this to see the change in outcome in the browser.
        // Usually this boolean would be acquired from a password check or other auth verification.
        let mut is_logged_in = false;
        let mut has_token = false;

        // Don't forward to `/login` if we are already on `/login`.
        let key = std::env::var("JWT_SECRET").unwrap_or_else(|_| "random_bullshit_go".into());
        let token = match request.headers().get("x-authorization"){
            Some(token) => {
                has_token = true;
                token.to_str().ok().unwrap()
            },
            None => {
                has_token = false;
                &"no token"
            }
        };
            




        println!("{:?}", token);
        if has_token{
            let token_data = decode::<Claims>(
                token,
                &DecodingKey::from_secret(key.as_bytes()),
                &Validation::default(),
            );
            println!("{:?}", token_data);
    
            let auth_data: Result<TokenData<Claims>, jsonwebtoken::errors::Error> = match token_data {
                Ok(token_data) => {
                    println!("{:?}", token_data);
                    is_logged_in = true;
                    Ok(token_data)
                }
                Err(err) => {
                    println!("{:?}", err);
                    is_logged_in = false;
                    Err(err)
                }
            };
            println!("{:?}", auth_data);
        }



        if !is_logged_in && request.path() != "/login" && request.path() != "/register" {
            let (request, _pl) = request.into_parts();

            let response = HttpResponse::Found()
                .insert_header((http::header::LOCATION, "/login"))
                .finish()
                // constructed responses map to "right" body
                .map_into_right_body();

            return Box::pin(async { Ok(ServiceResponse::new(request, response)) });
        }

        let res = self.service.call(request);

        Box::pin(async move {
            // forwarded responses map to "left" body
            res.await.map(ServiceResponse::map_into_left_body)
        })
    }
}
