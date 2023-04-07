use actix_web::{
    post, web, Result, HttpResponse, error,
    http::StatusCode,
    middleware, App, HttpMessage as _, HttpRequest, HttpServer, Responder,
	cookie::{self, Key},
    middleware::Logger,
};



use mongodb::{bson::doc,Client, Collection};



use serde::{Serialize, Deserialize};



use crate::models;
use models::Event;



#[post("/tasks/create")]
async fn create(req: HttpRequest,client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
	
    println!("{:?}", data);


	HttpResponse::Ok().body("to complete")


}




#[post("/tasks/delete")]
async fn delete(req: HttpRequest,client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
	
    println!("{:?}", data);


	HttpResponse::Ok().body("to complete")


}



#[post("/tasks/edit")]
async fn edit(req: HttpRequest,client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
	
    println!("{:?}", data);


	HttpResponse::Ok().body("to complete")


}
