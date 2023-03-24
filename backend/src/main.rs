use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result, error};
use serde::Deserialize;





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

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let json_config = web::JsonConfig::default()
        .limit(4096)
        .error_handler(|err, _req| {
            // create custom error response
            error::InternalError::from_response(err, HttpResponse::Conflict().finish())
                .into()
        });
        App::new()
            .service(hello)
            .service(echo)
            .service(submit)
            .service(index2)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}