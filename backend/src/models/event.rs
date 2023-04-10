use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Event {
    #[serde(default)]
    pub id: String,
    pub title: String,
    pub start_date: String,
    pub end_date: String,
    pub start_time: String,
    pub end_time: String,
    pub participants: Vec<i32>,
    pub location: String,
    pub description: String,
    pub notifications: Vec<i32>,
    pub repeat: bool,
}

