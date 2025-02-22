const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId, Timestamp } = require('mongodb');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.amvbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();



    // collections
    const taskCollection = client.db('Task-Management').collection('task')

    const userCollection = client.db('Task-Management').collection('users')



    app.get('/tasks',async(req,res)=>{
        const result = await taskCollection.find().toArray()
        res.send(result)
    })


    app.get('/tasks/:id',async(req,res)=>{
        const Id = req.params.id;
        const query = {_id: new ObjectId(Id)}
        const myTask = await taskCollection.find(query).toArray();
      
        res.send(myTask);
      })
      
    
app.post('/tasks',async(req,res)=>{ 
  const task = req.body

  const result = await taskCollection.insertOne(task)
  res.send(result)
})

app.put('/tasks/:id',async(req,res)=>{ 
  const Id = req.params.id

  const task = req.body

    // console.log(Id,'hello',task)

    const filter = { _id: new ObjectId(Id)}; 

    const updateDoc = {
      $set: {
        title: task.title ,
        description: task.description,
        category: task.category,
        Timestamp: task.Timestamp,

      },
    };

    const result = await taskCollection.updateOne(filter, updateDoc);
    res.send(result)
 
  
})



app.put('/tasks/category/:id', async (req, res) => {
  const Id = req.params.id;
  const { category } = req.body; 
  // console.log(category,Id)
  const filter = { _id: new ObjectId(Id) };
  const updateDoc = {
    $set: {
      category: category, 
    },
  };

  const result = await taskCollection.updateOne(filter, updateDoc);
  res.send(result);
});







    app.post('/users',async(req,res)=>{
        const user = req.body;
      
        const query = {email : user.email}
            const existingUser = await userCollection.findOne(query)
            if(existingUser){
              return res.send({message:'user already exists',insertedId:null})
            }
      
      
        const result = await userCollection.insertOne(user)
        res.send(result)
      })




      
app.delete('/tasks/:id',async(req,res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await taskCollection.deleteOne(query)
  res.send(result)
})











    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
















app.get('/',async(req,res)=>{
    res.send('Task is Running')
})

app.listen(port,()=>{
    console.log(`Task_Management is running on port :${port}`)
})