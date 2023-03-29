use actix_web::{get, post, web, App, Result, HttpResponse, HttpServer};
use mongodb::{bson::doc, options::IndexOptions, Client, Collection, IndexModel};

use crate::models;
use models::User;








#[post("/login")]
async fn login(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
   let users = client.database("rust").collection("users");


   //get data
   //serach for email
   //if wrong
   //    send error mesg
   //if correct
      //confirm password
         //if false{ send  error }
         //else{ send user data }


   let user = data.clone();
   let all = users
         .find_one(doc! { "email": user.email }, None,)
         .await/*.expect("No matching documents found.")*/;
      let all2 = users
            .find_one(doc! { "email": "d" }, None,)
            .await/*.expect("No matching documents found.")*/;



            println!("{:?}", all);
            println!("{:?}", all2);
 



  // if all == Ok(None) {
  //    println!("all1 not exists" );
//
  // }
//
  // if all == Ok(Some(User)) {
  //    println!("all1 exists" );
//
  // }
//
  // if all2 == Ok(None) {
  //    println!("all2 not exists" );
//
  // }
//
  // if all2 == Ok(Some(User)) {
  //    println!("all2 exists" );
//
  // }
  // //println!("Welcome {:?}!", data);


   let result = users.insert_one(data.into_inner(), None).await;
   match result {
      Ok(_) => HttpResponse::Ok().body("user added"),
      Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
   }
}




#[post("/register")]
async fn register(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {


   //get data
   //serach for email
   //if exists
   //    send error mesg
   //else
      //confirm password is good
         //if false{ send  error }
         //else{ send user data }
            //create user and hash password


   //println!(format!("Welcome {:?}!", client));
   //println!(format!("Welcome {:?}!", form));
   let collection = client.database("rust").collection("users");


   let all = collection
         .find_one(doc! {"username": "ilyes1"}, None,)
         .await.expect("No matching documents found.");

   println!("{:?}", all);
   //println!("Welcome {:?}!", data);


   let result = collection.insert_one(data.into_inner(), None).await;
   match result {
      Ok(_) => HttpResponse::Ok().body("user added"),
      Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
   }
   
}



