use actix_web::{post, web, HttpMessage, HttpRequest, HttpResponse};
use mongodb::{bson::doc, Client, Collection};
use serde::{Deserialize, Serialize};
use std::str::FromStr;

use crate::models;
use models::event::Event;
use models::user::User;
use models::json_responses::Inserted;
use models::json_responses::General;

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
struct IdDelete {
    event_id: String,
}



//{
//    "title": "dude",
//    "start_date": "dufzzde",
//    "end_date": "dude",
//    "start_time": "dufzzde",
//    "end_time": "dude",
//    "participants": [],
//    "location": "dude",
//    "description": "dufzzde",
//    "notifications": [],
//    "repeat": false
//
//    "username": "dude",
//    "email": "dude",
//    "password":"dude"
//}

//                             _         
//                            | |        
//     ___  _ __   ___   __ _ | |_   ___ 
//    / __|| '__| / _ \ / _` || __| / _ \
//   | (__ | |   |  __/| (_| || |_ |  __/
//    \___||_|    \___| \__,_| \__| \___|

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    let the_collection: Collection<User> = client.database("rust").collection("users");

    //gets string from middleware where token is decrypted and makes a mongodb object with it
    let user_id = mongodb::bson::oid::ObjectId::from_str(req.extensions().get::<String>().unwrap());
    let event_id = mongodb::bson::oid::ObjectId::new();
    let inserted_event = the_collection
        .update_one(
            doc! {"_id": user_id.unwrap()},
            // idk why cant use the struct directly
            doc! { "$push": { "events": doc!{
                "_id": event_id,
                "title": &data.title,
                "start_date": &data.start_date,
                "end_date": &data.end_date,
                "start_time": &data.start_time,
                "end_time": &data.end_time,
                "participants": [],
                "location": &data.location,
                "description": &data.description,
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         _        _        _         
//        | |      | |      | |        
//      __| |  ___ | |  ___ | |_   ___ 
//     / _` | / _ \| | / _ \| __| / _ \
//    | (_| ||  __/| ||  __/| |_ |  __/
//     \__,_| \___||_| \___| \__| \___|
                             

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

            let events = the_collection
                .update_one(
                    doc! {"_id": user_id.unwrap()},
                    doc! { "$pull": { "events": {"_id": result}}},
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                _  _  _   
//               | |(_)| |  
//       ___   __| | _ | |_ 
//      / _ \ / _` || || __|
//     |  __/| (_) || || |_ 
//      \___| \__,_||_| \__|


#[post("/events/edit/{event_id}")]
async fn edit(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> HttpResponse {
    let the_collection: Collection<User> = client.database("rust").collection("users");

    let user_id = mongodb::bson::oid::ObjectId::from_str(req.extensions().get::<String>().unwrap());
    let event_id = data.id;
    let inserted_event = the_collection
        .update_one(
            doc! {
                "_id": user_id.unwrap(),
                "events._id": event_id
            },
            // idk why cant use the struct directly
            doc! { "$set": { "levels.proven.configs.$": "newData" }},
            None,
        )
        .await;
    println!("{:?}", inserted_event);

/*


doc!{
                "_id": event_id,
                "title": &data.title,
                "start_date": &data.start_date,
                "end_date": &data.end_date,
                "start_time": &data.start_time,
                "end_time": &data.end_time,
                "participants": [],
                "location": &data.location,
                "description": &data.description,
                "notifications": [],
                "repeat": false,
            }
 */

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


