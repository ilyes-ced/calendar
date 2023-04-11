use crate::models;
use actix_web::{post, web, HttpMessage, HttpRequest, HttpResponse, Responder};
use models::event::Event;
use models::user::User;
use mongodb::{bson::doc, results::InsertOneResult, Client, Collection};
use rand::{distributions::Alphanumeric, Rng};
use serde::{Deserialize, Serialize};
use serde_json::Result;
use std::str::FromStr; // 0.8

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
struct WebResultInserted {
    code: u32,
    result: String,
}

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    let the_collection: Collection<User> = client.database("rust").collection("users");

    //elem match example
    //let events_collectffion: Collection<Test> = client.database("rust").collection("events");
    //let ff = events_collectffion.find_one(doc! {
    //    "participants": {"$elemMatch": { "test": "some_data" }}
    //}, None).await;
    //{ $push: { scores: 89 } }
    //let inserted_event = the_collection.insert_one(data.clone(), None).await;
    /**
     *
     * {
      "title": "dude",
      "start_date": "dufzzde",
      "end_date": "dude",
      "start_time": "dufzzde",
      "end_time": "dude",
      "participants": [],
      "location": "dude",
      "description": "dufzzde",
      "notifications": [],
      "repeat": false

      "username": "dude",
      "email": "dude",
      "password":"dude"
    }
     */
    //get this id from middleware

    //gets string from middleware where token is decrypted and makes a mongodb object with it
    let user_id = mongodb::bson::oid::ObjectId::from_str(req.extensions().get::<String>().unwrap());
    let event_id = mongodb::bson::oid::ObjectId::from_str(&"64357840846d2618945ac16d").unwrap();
    println!("{:?}", event_id);
    println!("{:?}", event_id);
    println!("{:?}", event_id);
    println!("{:?}", event_id);
    let inserted_event = the_collection
        .update_one(
            doc! {"_id": user_id.unwrap()},
            // idk why cant use the struct directly
            doc! { "$push": { "events": doc!{
                "_id": event_id,
                "title": "dzad",
                "start_date": "dzad",
                "end_date": "dzad",
                "start_time": "dzad",
                "end_time": "dzad",
                "participants": [],
                "location": "dzad",
                "description": "dzad",
                "notifications": [],
                "repeat": false,
            }}},
            None,
        )
        .await;
    println!("{:?}", inserted_event);

    match inserted_event {
        Ok(value) => HttpResponse::Ok().json(WebResultInserted {
            code: 201,
            result: event_id.to_string().chars().take(24).collect(),
        }),
        Err(err) => HttpResponse::InternalServerError().json(err.to_string()),
    }
}

#[post("/events/delete/{event_id}")]
async fn delete(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
    event_id: web::Path<String>,
) -> HttpResponse {
    println!("{:?}", data);
    println!("{:?}", event_id);
    let the_collection: Collection<User> = client.database("rust").collection("users");
    match mongodb::bson::oid::ObjectId::from_str(&event_id) {
        Ok(result) => {
            let user_id =
                mongodb::bson::oid::ObjectId::from_str(req.extensions().get::<String>().unwrap());
            let event_id =
                mongodb::bson::oid::ObjectId::from_str(&"64357840846d2618945ac16d").unwrap();

            let events = the_collection
                .update_one(
                    doc! {"_id": user_id.unwrap()},
                    // idk why cant use the struct directly
                    doc! { "$pull": { "events": {"_id": event_id}}},
                    None,
                )
                .await;

            if events.unwrap().modified_count == 1 {
                HttpResponse::Ok().body("is deleted")
            } else {
                HttpResponse::Ok().body("it dont exists")
            }
        }
        Err(err) => HttpResponse::Ok().body("invalid id"),
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
