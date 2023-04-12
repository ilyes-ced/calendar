use super::event::Event;
use super::task::Task;
use super::contact::Contact;
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
    #[serde(default)]
    pub tasks: Vec<Task>,
    #[serde(default)]
    pub contacts: Vec<Contact>,
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
