use actix_utils::future::{ok, Either};
use actix_web::{
    body::{EitherBody, MessageBody},
    dev::{self, Service, ServiceRequest, ServiceResponse, Transform},
    http::Method,
    http::{self, StatusCode},
    Error, HttpMessage, HttpResponse,
};
use serde::{Deserialize, Serialize};
use models::json_responses::General;

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
struct WebResultInserted {
    code: u32,
    result: String,
}

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
        let mut is_logged_in = false;
        let mut has_token = false;

        let key = std::env::var("JWT_SECRET").unwrap_or_else(|_| "random_bullshit_go".into());
        let token = match request.headers().get("x-authorization") {
            Some(token) => {
                has_token = true;
                token.to_str().ok().unwrap()
            }
            None => {
                has_token = false;
                &"no token"
            }
        };

        println!("{:?}", token);
        if has_token {
            let token_data = decode::<Claims>(
                token,
                &DecodingKey::from_secret(key.as_bytes()),
                &Validation::default(),
            );
            println!("{:?}", token_data);

            let auth_data: Result<TokenData<Claims>, jsonwebtoken::errors::Error> = match token_data
            {
                Ok(token_data) => {
                    println!("{:?}", token_data);
                    is_logged_in = true;
                    request
                        .extensions_mut()
                        .insert(token_data.claims.user_id.clone());
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

        //change redirect to httpresponse not authorized
        if !is_logged_in && request.path() != "/login" && request.path() != "/register" {
            let (request, _pl) = request.into_parts();
            //works but kinda hacky
            let res = HttpResponse::with_body(StatusCode::UNAUTHORIZED, "Invalid JWT Token");
            return Box::pin(async {
                Ok(ServiceResponse::new(
                    request,
                    HttpResponse::Unauthorized()
                        .json(General{
                            message : "invalid user token".to_owned()
                        })
                        .map_into_right_body(),
                ))
            });

            //let res= HttpResponse::with_body(StatusCode::UNAUTHORIZED, "Invalid JWT Token").map_into_boxed_body();
            //return res
        }

        let res = self.service.call(request);

        Box::pin(async move {
            // forwarded responses map to "left" body
            res.await.map(ServiceResponse::map_into_left_body)
        })
    }
}
