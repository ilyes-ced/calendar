use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Task {
    pub id: String,
    pub name: String,
    pub category: i32,
    pub subtasks: Vec<i32>,
}
