pub struct MongDbRepository<T> {
    pub url: String,
    pub collection: Collection<T>,
}

impl<T> MongDbRepository<T> {
    pub fn new(url: String, collection: Collection<T>) -> Self {
        MongDbRepository { url, collection }
    }

    pub async fn insert_one(
        &self,
        to_insert: &T,
    ) -> Result<InsertOneResult, mongodb::error::Error>
    where
        T: Serialize,
    {
        let result = self.collection.insert_one(to_insert, None).await;

        result
    }

    pub async fn query_one(&self, id: &Uuid) -> Option<T>
    where
        T: DeserializeOwned + Unpin + Send + Sync,
    {
        let bson_id = mongodb::bson::uuid::Uuid::from_bytes(id.into_bytes());

        let query_result = self
            .collection
            .find_one(Some(doc! {"_id": bson_id}), None)
            .await
            .expect("Query result not found");

        query_result
    }
}

#[derive(Deserialize, Serialize)]
pub struct NewsarticleDto {
    pub name: String,   
}

#[derive(Serialize, Clone, Deserialize)]
pub struct Newsarticle {
    pub id: Uuid,
    pub name: String,
}

impl Display for Newsarticle {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{} {}", self.id, self.name)
    }
}

impl From<NewsarticleDto> for Newsarticle {
    fn from(article: NewsarticleDto) -> Self {
        Newsarticle {
            id: Uuid::new_v4(),
            name: article.name,
        }
    }
}