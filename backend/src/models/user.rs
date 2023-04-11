use super::event::Event;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct User {
    #[serde(rename = "_id")]
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    #[serde(default)]
    pub username: String,
    pub email: String,
    pub password: String,
    #[serde(default)]
    pub events: Vec<Event>,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct LoginUser {
    pub email: String,
    pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct UserDate {
    pub username: String,
    pub email: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct LoginUserResponse {
    pub user_data: UserDate,
    pub token: String,
}
