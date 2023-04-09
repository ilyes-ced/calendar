use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Contact {
    pub id: String,
    pub name: String,
    pub phone_number: String,
    pub address: String,
    pub image: String,
}
