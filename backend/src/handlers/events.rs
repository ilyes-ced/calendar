use crate::models;
use actix_web::{post, web, HttpMessage, HttpRequest, HttpResponse, Responder};
use models::event::Event;
use models::user::User;
use models::json_responses::Inserted;
use models::json_responses::General;
use mongodb::{bson::doc, results::InsertOneResult, Client, Collection};
use rand::{distributions::Alphanumeric, Rng};
use serde::{Deserialize, Serialize};
use serde_json::Result;
use std::str::FromStr; // 0.8

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
struct IdDelete {
    event_id: String,
}

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    let the_collection: Collection<User> = client.database("rust").collection("users");

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
        Ok(..) => HttpResponse::Ok().json(
            Inserted{
                message : "dazd".to_owned(),
                inserted_id: event_id.to_string().chars().take(24).collect()
            }
        ),
        Err(err) => HttpResponse::InternalServerError().json(err.to_string()),
    }
}

#[post("/events/delete")]
async fn delete(
    req: HttpRequest,
    client: web::Data<Client>,
    event_id: web::Json<IdDelete>,
) -> HttpResponse {
    println!("{:?}", event_id);
    let the_collection: Collection<User> = client.database("rust").collection("users");
    match mongodb::bson::oid::ObjectId::from_str(&event_id.event_id) {
        Ok(result) => {
            let user_id =
                mongodb::bson::oid::ObjectId::from_str(req.extensions().get::<String>().unwrap());
            //generate random id string here
            let event_id =
                mongodb::bson::oid::ObjectId::from_str(&"64357840846d2618945ac16d").unwrap();

            let events = the_collection
                .update_one(
                    doc! {"_id": user_id.unwrap()},
                    doc! { "$pull": { "events": {"_id": event_id}}},
                    None,
                )
                .await;

            if events.unwrap().modified_count == 1 {
                HttpResponse::Ok().json(General{
                    message: "is deleted".to_owned()
                })
            } else {
                HttpResponse::NotFound().json(General{
                    message: "it dont exists".to_owned()
                })
            }
        }
        Err(..) => HttpResponse::BadRequest().json(General{
            message: "invalid id".to_owned()
        }),
    }
}

#[post("/events/edit/{event_id}")]
async fn edit(req: HttpRequest, client: web::Data<Client>, data: web::Json<Event>) -> HttpResponse {
    println!("{:?}", data);

    HttpResponse::Ok().body("to complete")
}





