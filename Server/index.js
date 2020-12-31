import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from  './routes/posts.js'

const app = express();



app.use(bodyparser.json({extended: true , limit: "30mb"}))
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

//routes

app.use('/posts' , postRoutes)

//MongoDb Connection
const CONNECTION_URL = "mongodb+srv://root:root@cluster0.7ifds.mongodb.net/test?retryWrites=true&w=majority"
const PORT = process.env.PORT || 8000


mongoose.connect(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true} )
    .then(app.listen(PORT , () => console.log(`Server running on port http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

