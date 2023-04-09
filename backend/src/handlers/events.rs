use actix_web::{post, web, HttpRequest, HttpResponse, Responder, Result};

use bson::Bson;
use mongodb::{Client, Collection};

use crate::models;
use models::event::Event;

#[post("/events/create")]
async fn create(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<Event>,
) -> Result<impl Responder> {

    let events_collection: Collection<Event> = client.database("rust").collection("events");
    let inserted_event = events_collection.insert_one(data.clone(), None).await;

    
    println!("{:?}", inserted_event);
    let result: Result<Bson, &str> = match inserted_event {
        Ok(v) => {
            println!("{:?}", v.inserted_id);
            print_type_of(&v.inserted_id);
            Ok(v.inserted_id)
            //v.inserted_id.to_string().to_owned()
            
        },
        Err(_e) => {
            println!("{:?}", _e);
            Err("couldnt add to database")
        }
    };


    let value: Result<_, &str> = match result {
        Ok(value) => {
            println!("{:?}", value);
            Ok(value)
        }
        Err(err) => {
            Err("zadaz")
            //HttpResponse::InternalServerError().body(err.to_string())
        }
    };
    Ok(web::Json(value))
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
fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}