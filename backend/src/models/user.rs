use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct User {
    pub username: String,
    pub email: String,
    pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct LoginUser {
    pub email: String,
    pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct UserDate {
    pub username: String,
    pub email: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize)]
pub struct LoginUserResponse {
    pub user_data: UserDate,
    pub token: String,
}
