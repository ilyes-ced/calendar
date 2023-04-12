use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct Inserted {
    pub message: String,
    pub inserted_id: String,
}



#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct General {
    pub message: String,
}
