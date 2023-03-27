use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result, Error, error};
use serde::Deserialize;
use futures::{future::ok, stream::once};

mod handlers;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let json_config = web::JsonConfig::default()
        .limit(4096)
        .error_handler(|err, _req| {
            error::InternalError::from_response(err, HttpResponse::Conflict().finish())
                .into()
        });
        App::new()
            .service(handlers::login)
            .service(handlers::register)
            //.route("/hey", web::get().to(handlers::manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}