use actix_web::{
    post, web, Result, HttpResponse, error,
    http::StatusCode,
    middleware, App, HttpMessage as _, HttpRequest, HttpServer, Responder,
	cookie::{self, Key},
    middleware::Logger,
};

use actix_identity::{Identity, IdentityMiddleware};

use actix_session::{
	config::PersistentSession, storage::CookieSessionStore, Session, SessionMiddleware,
};

use mongodb::{bson::doc,Client, Collection};

use log::{info, warn, error, debug};


use serde::{Serialize, Deserialize};



use crate::models;
use crate::utils;
use models::user::User;
use utils::hash;


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Login_user {
    pub email: String,
    pub password: String,
}
#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Register_user {
    pub username: String,
    pub email: String,
    pub password: String,
}


#[post("/login")]
async fn login(req: HttpRequest,client: web::Data<Client>, data: web::Json<Login_user>) -> HttpResponse {
	let users: Collection<Login_user> = client.database("rust").collection("users");



	let user = data.clone();
	let user_data = users
		.find_one(doc! { "email": user.email }, None,)
		.await;

	let result: Result<_, &str> = match user_data {
		Ok(v) => {
			match v {
				Some(user_data) => {
					if hash::verify_hash(String::from(&user_data.password), String::from(&data.password)) {
						println!("correct");
						println!("{user_data:?}");
						// add session storage
						Ok(user_data)
					}else{
						println!("incorrect");
						Err("bad password")
					}
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
			let obj = serde_json::to_string(&value);
			HttpResponse::Ok().body(obj.unwrap())
		},
		Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
	}

}




#[post("/register")]
async fn register(client: web::Data<Client>, data: web::Json<Register_user>) -> HttpResponse {

	let users: Collection<Register_user> = client.database("rust").collection("users");






 
   	let user = data.clone();
   	let mut user_data = data;
   	let user = users
		.find_one(doc! { "email": user.email }, None,)
		.await;


	let result: Result<_, &str> = match user {
		Ok(v) => {
		  	match v {
			  	Some(user_data) => {
				   	Err("email taken")
			  	},
			  	None => {
					println!("addes user");
					user_data.password = hash::hash(user_data.clone().password);
					Ok(users.insert_one(user_data.clone(), None).await)
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





#[post("/verify")]
async fn verify(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
	//hash::hash(String::from("test"));
	//hash::verify_hash(String::from("test"));
	HttpResponse::Ok().body("to complete")
}


#[post("/logout")]
async fn logout(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
	HttpResponse::Ok().body("to complete")
}
