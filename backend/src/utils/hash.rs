use scrypt::{
    password_hash::{
        rand_core::OsRng,
        PasswordHash, PasswordHasher, PasswordVerifier, SaltString
    },
    Scrypt
};

//Result<(), Box<dyn Error>>
pub fn hash(password: String) -> Result<Result<PasswordHash<'static>, Error>, &'static str> {
    println!("hello there from hash {}", password);
    println!("hello there from hash");

    let password = password.as_bytes();
	println!("{:?}", password);
	
	let salt = SaltString::generate(&mut OsRng);

    let password_hash = match Scrypt.hash_password(password, &salt) {
        Ok(value) => {
	        let parsed_hash = PasswordHash::new(&value.to_string());
            Ok(parsed_hash)
        },
        Err(err) => {
            Err("bad hashing")
        }
    };

	password_hash
    
	//assert!(Scrypt.verify_password(password, &parsed_hash.clone().unwrap()).is_ok());
	//println!("{:?}", Scrypt.verify_password(password, &parsed_hash.unwrap()).is_ok());
    //Ok(parsed_hash)
}





pub fn verify_hash(hash: String) {
    println!("hello there from verify_hash {}", hash);
    println!("hello there from verify_hash");
}




