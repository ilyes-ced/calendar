use serde::{Deserialize, Serialize};

//mod User;
//mod Event;
//mod Task;
//mod Category;
//mod Contact;


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct User {
    pub username: String,
    pub email: String,
    pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Event {
    pub id: i32,
    pub title: String,
    pub start_date: i32,
    pub end_date: i32,
    pub start_time: i32,
    pub end_time: i32,
    pub participants: Vec<i32>,
    pub location: String,
    pub notifications: Vec<i32>,
    pub calendar: i32,
    pub description: String,
    pub repeat: bool
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Task {
    pub id: i32,
    pub name: String,
    pub category: i32,
    pub subtasks: Vec<i32>,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Category {
    pub id: i32,
    pub name: String,
    pub color: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Contact {
    pub id: i32,
    pub name: String,
    pub phone_number: String,
    pub address: String,
    pub image: String,
}