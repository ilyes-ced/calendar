use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result, Error, error};
use serde::Deserialize;
use futures::{future::ok, stream::once};


use crate::handlers;


#[get("/")]
async fn stream() -> HttpResponse {
    let body = once(ok::<_, Error>(web::Bytes::from_static(b"test")));

    HttpResponse::Ok()
        .content_type("application/json")
        .streaming(body)
}






#[derive(Deserialize)]
struct Info {
    username: String,
}
#[derive(Deserialize)]
struct FormData {
    username: String,
}

/// deserialize `Info` from request's body
#[post("/submit")]
async fn submit(info: web::Json<Info>) -> Result<String> {
    Ok(format!("Welcome {}!", info.username))
}

#[post("/submit_form")]
async fn index2(form: web::Form<FormData>) -> Result<String> {
    Ok(format!("Welcome {}!", form.username))
}



#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}