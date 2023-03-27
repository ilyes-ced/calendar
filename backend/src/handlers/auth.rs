use actix_web::{get, post, web, App, Result, HttpResponse, HttpServer};
use mongodb::{bson::doc, options::IndexOptions, Client, Collection, IndexModel};

use crate::models;
use models::User;








#[post("/login")]
async fn login(info: web::Json<User>) -> Result<String> {
    Ok(format!("Welcome {:?}!", info))
}




#[post("/register")]
async fn register(client: web::Data<Client>, form: web::Form<User>) -> HttpResponse {
   //println!(format!("Welcome {:?}!", client));
   //println!(format!("Welcome {:?}!", form));
   

   println!("Welcome {:?}!", form);
   println!("Welcome {:?}!", client);


   let collection = client.database("rust").collection("users");
   let result = collection.insert_one(form.into_inner(), None).await;
   match result {
      Ok(_) => HttpResponse::Ok().body("user added"),
      Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
   }

}



