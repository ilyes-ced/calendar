use actix_web::{post, web, HttpRequest, HttpResponse, Responder, Result};
use serde::{Deserialize, Serialize};
use std::str::FromStr;
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
                code: 201, result: value.inserted_id.to_string().chars().skip(10).take(24).collect()
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
    match mongodb::bson::oid::ObjectId::from_str(&event_id) {
        Ok(result) =>  {
            // here check is owned
            let owned = true;
            if !owned {
                return HttpResponse::Ok().body("not owned")
            };
                
            let events = events_collection.delete_one(doc! { "_id": result }, None).await; 
            println!("{:?}", events);

            if events.unwrap().deleted_count == 1{
                HttpResponse::Ok().body("to complete")
            }else{
                HttpResponse::Ok().body("it dont exists")
            }

        },
        Err(err) => {
            HttpResponse::Ok().body("invalid id")
        }
    }
    

}

#[post("/events/edit/{event_id}")]
async fn edit(req: HttpRequest, client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}
fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}