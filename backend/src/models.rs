use serde::{Deserialize, Serialize};


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct User {
    #[serde(default)]
    pub id: i32,
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
    pub id: i32,
    pub title: String,
    pub start_date: i32,
    pub end_date: i32,
    pub start_time: i32,
    pub end_time: i32,
    pub participants: Vec<i32>,
    pub location: String,
    pub description: String,
    pub notifications: Vec<i32>,
    pub repeat: bool
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Task {
    #[serde(default)]
    pub id: i32,
    pub name: String,
    pub category: i32,
    pub subtasks: Vec<i32>,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Category {
    #[serde(default)]
    pub id: i32,
    pub name: String,
    pub color: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Contact {
    #[serde(default)]
    pub id: i32,
    pub name: String,
    pub phone_number: String,
    pub address: String,
    pub image: String,
}