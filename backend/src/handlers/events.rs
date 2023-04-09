use actix_web::{post, web, HttpRequest, HttpResponse};

use mongodb::{Client};


use crate::models;
use models::event::Event;

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}

#[post("/events/delete")]
async fn delete(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}

#[post("/events/edit")]
async fn edit(req: HttpRequest, client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}
