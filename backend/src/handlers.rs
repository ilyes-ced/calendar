use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result, Error, error};
use serde::Deserialize;
use futures::{future::ok, stream::once};
mod models;
use models::User;






#[get("/")]
async fn stream() -> HttpResponse {
    let body = once(ok::<_, Error>(web::Bytes::from_static(b"test")));

    HttpResponse::Ok()
        .content_type("application/json")
        .streaming(body)
}


#[post("/login")]
async fn login(info: web::Json<User>) -> Result<String> {
    Ok(format!("Welcome {:?}!", info))
}


#[post("/register")]
async fn register(info: web::Json<User>) -> Result<String> {
    Ok(format!("Welcome {:?}!", info))
}



