use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};

pub fn hash(password: String) -> String {
    let password = password.as_bytes();
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let password_hash = argon2.hash_password(password, &salt).unwrap().to_string();
    password_hash
}

pub fn verify_hash(hash: String, password: String) -> bool {
    let password = password.as_bytes();
    let parsed_hash = PasswordHash::new(&hash).unwrap();
    Argon2::default()
        .verify_password(password, &parsed_hash)
        .is_ok()
}
