use actix_web::{
    cookie::{self, Key},
    error, get,
    http::StatusCode,
    middleware,
    middleware::Logger,
    post, web, App, HttpMessage as _, HttpRequest, HttpResponse, HttpServer, Responder, Result,
};

use mongodb::{bson::doc, Client, Collection};

use serde::{Deserialize, Serialize};

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
