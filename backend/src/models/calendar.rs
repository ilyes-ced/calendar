use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]

pub struct Calendar {
    pub name: String,
    pub events: Vec<i32>,
}
