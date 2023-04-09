use std::time::Duration;
use actix_web::{middleware::Logger, web, App, HttpServer};
use mongodb::Client;
use actix_extensible_rate_limit::backend::SimpleInputFunctionBuilder;
use actix_extensible_rate_limit::RateLimiter;
use actix_extensible_rate_limit::backend::memory::InMemoryBackend;

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

        App::new()
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
