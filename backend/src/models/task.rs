use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Task {
    pub id: String,
    pub name: String,
    pub category: i32,
    pub tags: Vec<Tag>,
    pub subtasks: Vec<i32>,
}


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct SubTask {
    pub id: String,
    pub name: String,
    pub category: i32,
    pub tags: Vec<Tag>,
}


#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Tag {
    pub name: String,
    pub color: String,
}