import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyparser.json({extended: true , limit: "30mb"}))
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors)


//MongoDb Connection
const CONNECTION_URL = "mongodb+srv://root:root@cluster0.7ifds.mongodb.net/test?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true} )
    .then(app.listen(PORT , () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

