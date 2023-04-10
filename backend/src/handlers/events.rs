use actix_web::{post, web, HttpRequest, HttpResponse, Responder, Result};
use serde::{Deserialize, Serialize};
use bson::Bson;
use mongodb::{bson::doc, Client, Collection, results::InsertOneResult};

use crate::models;
use models::event::Event;

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
struct WebResultInserted {
    code: u32,
    result: String
}

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {

    let events_collection: Collection<Event> = client.database("rust").collection("events");
    let inserted_event = events_collection.insert_one(data.clone(), None).await;

    match inserted_event {
        Ok(value) => HttpResponse::Ok().json(
            WebResultInserted{
                code: 201, result: value.inserted_id.to_string()
            }
        ),
        Err(err) => HttpResponse::InternalServerError().json(err.to_string()),
    }

}

#[post("/events/delete/{event_id}")]
async fn delete(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
    event_id: web::Path<String>
) -> HttpResponse {
    println!("{:?}", data);
    println!("{:?}", event_id);
    let events_collection: Collection<Event> = client.database("rust").collection("events");
 
    let bson_id = mongodb::bson::uuid::Uuid::from_bytes(event_id.into_bytes());
    let events = events_collection.find_one(doc! { "id": event_id }, None).await;

    HttpResponse::Ok().body("to complete")
}

#[post("/events/edit/{event_id}")]
async fn edit(req: HttpRequest, client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}
fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}