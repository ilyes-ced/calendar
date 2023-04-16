use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Event {
    #[serde(rename = "_id")]
    #[serde(default)]
    pub id: mongodb::bson::oid::ObjectId,
    //pub id: String,
    pub title: String,
    pub start_date: u32,
    pub end_date: u32,
    pub start_time: u32,
    pub end_time: u32,
    pub participants: Vec<u32>,
    pub location: String,
    pub description: String,
    pub notifications: Vec<u32>,
    pub repeat: bool,
}


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct EditEvent {
    #[serde(rename = "_id")]
    pub id: String,
    pub title: String,
    pub start_date: u32,
    pub end_date: u32,
    pub start_time: u32,
    pub end_time: u32,
    pub participants: Vec<u32>,
    pub location: String,
    pub description: String,
    pub notifications: Vec<u32>,
    pub repeat: bool,
}
