use actix_extensible_rate_limit::{RateLimiter, backend::{memory::InMemoryBackend, SimpleInputFunctionBuilder}};
use actix_cors::Cors;
use actix_web::{middleware::Logger, web, App, HttpServer, http};
use mongodb::Client;
use std::time::Duration;

pub mod handlers;
pub mod middlewares;
pub mod models;
pub mod utils;
use crate::handlers::auth;
use crate::handlers::events;
use crate::middlewares::authorization::CheckLogin;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    let uri = std::env::var("MONGODB_URI").unwrap_or_else(|_| "mongodb://localhost:27017".into());
    let client = Client::with_uri_str(uri).await.expect("failed to connect");
    let backend = InMemoryBackend::builder().build();
    HttpServer::new(move || {
        let input = SimpleInputFunctionBuilder::new(Duration::from_secs(60), 10)
            .real_ip_key()
            .build();
        let middleware = RateLimiter::builder(backend.clone(), input)
            .add_headers()
            .build();
        let cors = Cors::permissive();
        //let cors = Cors::default()
        //    .allowed_origin("http://localhost:3000")
        //    .allowed_origin_fn(|origin, _req_head| {
        //        origin.as_bytes().ends_with(b"localhost:3000")
        //    })
        //    .allowed_methods(vec!["GET", "POST"])
        //    .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
        //    .allowed_header(http::header::CONTENT_TYPE)
        //    .max_age(3600);
        App::new()
            .wrap(cors)
            .wrap(Logger::default())
            .wrap(CheckLogin)
            .wrap(middleware)
            .app_data(web::Data::new(client.clone()))
            .service(auth::login)
            .service(auth::register)
            .service(events::create)
            .service(events::delete)
            .service(events::edit)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}



//
//
//    let cors = Cors::default()
//         .allowed_origin("http://localhost:3000")
//         .allowed_origin_fn(|origin, _req_head| {
//             origin.as_bytes().ends_with(b"localhost:3000")
//         })
//         .allowed_methods(vec!["GET", "POST"])
//         .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
//         .allowed_header(http::header::CONTENT_TYPE)
//         .max_age(3600);
//