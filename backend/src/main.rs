use actix_web::{web, App, HttpResponse, HttpServer, error};
use mongodb::{bson::doc, options::IndexOptions, Client, Collection, IndexModel};

pub mod handlers;
pub mod models;
use crate::handlers::auth::register;
use crate::handlers::auth::login;


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
            .app_data(web::Data::new(client.clone()))
            .service(login)
            .service(register)
            //.route("/hey", web::get().to(handlers::manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}