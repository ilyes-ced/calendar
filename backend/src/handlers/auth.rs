use actix_web::{post, web, Result, HttpResponse};
use mongodb::{bson::doc,Client, Collection};

use crate::models;
use models::User;








#[post("/login")]
async fn login(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
   let users: Collection<User> = client.database("rust").collection("users");


   //get data
   //serach for email
   //if wrong
   //    send error mesg
   //if correct
      //confirm password
         //if false{ send  error }
         //else{ send user data }


	let user = data.clone();
	let user = users
		.find_one(doc! { "email": user.email }, None,)
		.await/*.expect("No matching documents found.")*/;


	let result: Result<_, &str> = match user {
		Ok(v) => {
			match v {
				Some(user_data) => {
					println!("hello");
					Ok(users.insert_one(user_data.clone(), None).await)
					//Ok("hello")
				},
				None => {
					println!("no email");
					Err("email doesnt exist")
				}
			}
		},
		Err(_e) => {
			println!("{:?}",_e);
			Err("big error")
		}
	};


	
	match result {
		Ok(value) => {
			println!("{:?}", value);
			HttpResponse::Ok().body("user added")
		},
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



