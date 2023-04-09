use actix_web::{
    cookie::{self, Key},
    error,
    http::StatusCode,
    middleware,
    middleware::Logger,
    post, web, App, HttpMessage as _, HttpRequest, HttpResponse, HttpServer, Responder, Result,
};

use actix_identity::{Identity, IdentityMiddleware};

use actix_session::{
    config::PersistentSession, storage::CookieSessionStore, Session, SessionMiddleware,
};
use mongodb::{bson::doc, Client, Collection};
use log::{debug, error, info, warn};
use serde::{Deserialize, Serialize};
use jsonwebtoken::{encode, decode, Header, Algorithm, Validation, EncodingKey, DecodingKey, get_current_timestamp};



use crate::models;
use crate::utils;
use models::user::User;
use models::user::LoginUser;
use models::user::UserDate;
use models::user::LoginUserResponse;
use utils::hash;



#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    aud: String, // Optional. Audience
    exp: u64,  // Required (validate_exp defaults to true in validation). Expiration time (as UTC timestamp)
    iat: u64,  // Optional. Issued at (as UTC timestamp)
    sub: String, // Optional. Subject (whom token refers to)
}



#[post("/login")]
async fn login(
    req: HttpRequest,
    client: web::Data<Client>,
    data: web::Json<LoginUser>,
) -> HttpResponse {
    let users: Collection<User> = client.database("rust").collection("users");

    let user_data = users.find_one(doc! { "email": &data.email }, None).await;

    println!("{:?}", user_data);
    let result: Result<_, &str> = match user_data {
        Ok(v) => {
            match v {
                Some(user_data) => {
                    if hash::verify_hash(
                        String::from(&user_data.password),
                        String::from(&data.password),
                    ) {
                        let my_claims = Claims{
                            aud: std::env::var("AUDIENCE").unwrap_or_else(|_| "some_default_idk".into()),
                            exp: get_current_timestamp() + 3600*24*7,//expires in a week
                            iat: get_current_timestamp(),
                            sub: user_data.email.clone(),
                        };
                        println!("{:?}", my_claims);
                        let key = std::env::var("JWT_SECRET").unwrap_or_else(|_| "mongodb://localhost:27017".into());
                        let token = encode(
                            &Header::default(),
                            &my_claims,
                            &EncodingKey::from_secret(key.as_bytes())
                        ).unwrap();
                        let user = UserDate{
                            email: user_data.email,
                            username: user_data.username
                        };
                        // add session storage
                        Ok(LoginUserResponse{
                            user_data: user,
                            token: token
                        })
                    } else {
                        println!("incorrect");
                        Err("database error")
                    }
                }
                None => {
                    println!("no email");
                    Err("email doesnt exist")
                }
            }
        }
        Err(_e) => {
            println!("{:?}", _e);
            Err("big error")
        }
    };

    match result {
        Ok(value) => {
            let obj = serde_json::to_string(&value);
            HttpResponse::Ok().body(obj.unwrap())
        }
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[post("/register")]
async fn register(client: web::Data<Client>, data: web::Json<User>) -> HttpResponse {
    let users: Collection<User> = client.database("rust").collection("users");

    let user = data.clone();
    let mut user_data = data;
    let user = users.find_one(doc! { "email": user.email }, None).await;

    let result: Result<_, &str> = match user {
        Ok(v) => match v {
            Some(user_data) => Err("email taken"),
            None => {
                println!("addes user");
                user_data.password = hash::hash(user_data.clone().password);
                Ok(users.insert_one(user_data.clone(), None).await)
            }
        },
        Err(_e) => {
            println!("{:?}", _e);
            Err("big error")
        }
    };

    match result {
        Ok(value) => {
            println!("{:?}", value);
            HttpResponse::Ok().body("user added")
        }
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
