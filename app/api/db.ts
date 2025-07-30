
import{MongoClient,Db, ServerApiVersion} from 'mongodb';
// mangesh105jha
// ESbKKEUx7q0u7nFN

let cachedClient:MongoClient|null=null;
let cachedDb:any | Db=null


export async function connectToDB(){

  if(cachedClient && cachedDb){
    return{client:cachedClient,db: cachedDb}
  }
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.2y9n925.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    
      await client.connect();
      cachedClient=client;
      cachedDb=client.db('nextJSEccomerce');
      return {client, db: client.db('nextJSEccomerce')};
   


}


