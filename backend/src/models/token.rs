use serde::{Deserialize, Serialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct Token {
    aud: String, // Optional. Audience
    exp: u64,  // Required (validate_exp defaults to true in validation). Expiration time (as UTC timestamp)
    iat: u64,  // Optional. Issued at (as UTC timestamp)
    sub: String, // Optional. Subject (whom token refers to)
}