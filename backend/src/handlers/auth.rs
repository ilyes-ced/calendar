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

use log::{info, warn};

use crate::models;
use models::User;

use scrypt::{
    password_hash::{
        rand_core::OsRng,
        PasswordHash, PasswordHasher, PasswordVerifier, SaltString
    },
    Scrypt
};


use serde::{Serialize, Deserialize};




#[post("/login")]
async fn login(req: HttpRequest,client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
	let users: Collection<User> = client.database("rust").collection("users");


   //get data
   //serach for email
   //if wrong
   //    send error mesg
   //if correct
      //confirm password
         //if false{ send  error }
         //else{ send user data }
		 log::info!("{req:?}");




	//let password = b"hunter42"; // Bad password; don't actually use!
	//println!("{:?}", password);
	//
	//let salt = SaltString::generate(&mut OsRng);
	//println!("{:?}", salt);
	//
	//// Hash password to PHC string ($scrypt$...)
	//let password_hash = Scrypt.hash_password(password, &salt).unwrap().to_string();
	//println!("{:?}", password_hash);
	//
	//// Verify password against PHC string
	//let parsed_hash = PasswordHash::new(&password_hash);
	//println!("{:?}", parsed_hash);
	//
	//assert!(Scrypt.verify_password(password, &parsed_hash.clone().unwrap()).is_ok());
	//println!("{:?}", Scrypt.verify_password(password, &parsed_hash.unwrap()).is_ok());




    log::error!("This is an error log");
    log::warn!("This is a warn log");
    log::info!("this is an info log");
    log::debug!("This is a debug log");


	let user = data.clone();
	let user = users
		.find_one(doc! { "email": user.email }, None,)
		.await/*.expect("No matching documents found.")*/;


	let result: Result<_, &str> = match user {
		Ok(v) => {
			match v {
				Some(user_data) => {
					//here we check the password
					println!("{user_data:?}");
					//Ok(users.insert_one(user_data.clone(), None).await)
					Ok(user_data)
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
			let obj: User = serde_json::to_string(&value)?;
			let module: Result<User> = serde_json::from_str(&value.as_str());
			println!("{:?}",value);
			println!("{:?}",value);

			HttpResponse::Ok().body("value")
		},
		Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
	}

}




#[post("/register")]
async fn register(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {

	let users: Collection<User> = client.database("rust").collection("users");

   //get data
   //serach for email
   //if exists
   //    send error mesg
   //else
      //confirm password is good
         //if false{ send  error }
         //else{ send user data }
            //create user and hash password






   	let user = data.clone();
   	let user = users
		.find_one(doc! { "email": user.email }, None,)
		.await/*.expect("No matching documents found.")*/;


	let result: Result<_, &str> = match user {
		Ok(v) => {
		  	match v {
			  	Some(user_data) => {
				   	Err("email taken")
			  	},
			  	None => {
					// hash password and add to database
				   	println!("addes user");
					Ok(users.insert_one(data.clone(), None).await)
				
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



