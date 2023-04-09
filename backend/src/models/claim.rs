use serde::{Deserialize, Serialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub aud: String, // Optional. Audience
    pub exp: u64,  // Required (validate_exp defaults to true in validation). Expiration time (as UTC timestamp)
    pub iat: u64,  // Optional. Issued at (as UTC timestamp)
    pub sub: String, // Optional. Subject (whom token refers to)
}