use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Category {
    pub id: String,
    pub name: String,
    pub color: String,
}
