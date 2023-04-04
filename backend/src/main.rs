use actix_web::{web, App, HttpServer, middleware::Logger,};
use mongodb::{Client};

pub mod utils;
pub mod handlers;
pub mod models;
use crate::handlers::auth;


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    let uri = std::env::var("MONGODB_URI").unwrap_or_else(|_| "mongodb://localhost:27017".into());
    let client = Client::with_uri_str(uri).await.expect("failed to connect");

    HttpServer::new(move || {
        //let json_config = web::JsonConfig::default()
        //.limit(4096)
        //.error_handler(|err, _req| {
        //    error::InternalError::from_response(err, HttpResponse::Conflict().finish())
        //        .into()
        //});
        App::new()
            .wrap(Logger::default())
            .app_data(web::Data::new(client.clone()))
            .service(auth::login)
            .service(auth::register)
            .service(auth::logout)
            .service(auth::verify)
            //.route("/hey", web::get().to(handlers::manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}