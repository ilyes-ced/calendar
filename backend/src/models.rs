use serde::{Deserialize, Serialize};


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct User {
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    #[serde(default)] 
    pub username: String,
    pub email: String,
    pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Calendar {
    pub name: String,
    pub events: Vec<i32>,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Event {
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    pub title: String,
    pub start_date: String,
    pub end_date: String,
    pub start_time: String,
    pub end_time: String,
    #[serde(default)]
    pub participants: Vec<i32>,
    pub location: String,
    pub description: String,
    pub notifications: Vec<i32>,
    #[serde(default)]
    pub repeat: bool
}

//{
//  "title": "hlelo",
//  "start_date": "hlelo",
//  "end_date": "hlelo",
//  "start_time": "hlelo",
//  "end_time": "hlelo",
//  "participants": [], // optional
//  "location": "hlelo",
//  "description": "hlelo",
//  "notifications": [],
//  "repeat": false // optional
//}


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Task {
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    pub name: String,
    pub category: i32,
    pub subtasks: Vec<i32>,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Category {
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    pub name: String,
    pub color: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Contact {
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    pub name: String,
    pub phone_number: String,
    pub address: String,
    pub image: String,
}