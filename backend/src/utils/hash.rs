//use scrypt::{
//    password_hash::{
//        rand_core::OsRng,
//        PasswordHash, PasswordHasher, PasswordVerifier, SaltString, Error
//    },
//    Scrypt
//};
//
//Result<(), Box<dyn Error>>
//pub fn hash(password: String) ->  Result<Result<PasswordHash<'static>, Error>, Error>{
//    println!("hello there from hash {}", password);
//    println!("hello there from hash");
//
//    let password = password.as_bytes();
//	println!("{:?}", password);
//	
//	let salt = SaltString::generate(&mut OsRng);
//
//    let password_hash = match Scrypt.hash_password(password, &salt) {
//        Ok(value) => {
//	        let parsed_hash = match PasswordHash::new(&value.to_string()){
//                Ok(hash) => {
//                    Ok(hash)
//                },
//                Err(err) => {
//                    Err(err)
//                }
//            };
//            Ok(parsed_hash)
//        },
//        Err(err) => {
//            Err(err)
//        }
//    };
//
//	println!("{:?}", password_hash);
//    password_hash
//    
//	//assert!(Scrypt.verify_password(password, &parsed_hash.clone().unwrap()).is_ok());
//	//println!("{:?}", Scrypt.verify_password(password, &parsed_hash.unwrap()).is_ok());
//    //Ok(parsed_hash)
//}

use argon2::{
    password_hash::{
        rand_core::OsRng,
        PasswordHash, PasswordHasher, PasswordVerifier, SaltString
    },
    Argon2
};



pub fn hash(password: String) -> String  {


    let password = password.as_bytes();
    let salt = SaltString::generate(&mut OsRng);
    
    // Argon2 with default params (Argon2id v19)
    let argon2 = Argon2::default();
    
    // Hash password to PHC string ($argon2id$v=19$...)
    let password_hash = argon2.hash_password(password, &salt).unwrap().to_string();
    password_hash
    // Verify password against PHC string.
    //
    // NOTE: hash params from `parsed_hash` are used instead of what is configured in the
    // `Argon2` instance.

    //let parsed_hash = PasswordHash::new(&password_hash).unwrap();
    //assert!(Argon2::default().verify_password(password, &parsed_hash).is_ok());
    


}

pub fn verify_hash(hash: String, password: String) -> bool {
    println!("hello there from verify_hash {}", hash);
    println!("hello there from verify_hash {}", password);

    let password = password.as_bytes();
    let parsed_hash = PasswordHash::new(&hash).unwrap();
    println!("{}", parsed_hash);

    println!("{}", Argon2::default().verify_password(password, &parsed_hash).is_ok());
    println!("{}", Argon2::default().verify_password(password, &parsed_hash).is_ok());
    println!("{}", Argon2::default().verify_password(password, &parsed_hash).is_ok());
    println!("{}", Argon2::default().verify_password(password, &parsed_hash).is_ok());
    println!("{}", Argon2::default().verify_password(password, &parsed_hash).is_ok());

    true
}




