const express= require('express');
const mongoose= require('mongoose');

const app=express();

app.use(express.json())

const port=5000;
const url= "mongodb+srv://Nahid5702:faraji5702@realmcrud.5ajqr7v.mongodb.net/realm?retryWrites=true&w=majority";

const dbConnect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB connect successfully');
    } catch (error) {
        console.log('Mongodb con error');
    }
}

dbConnect()

const studentrouter= require("./routes/students");
app.use('/students',studentrouter)



app.listen(port, () =>{
    console.log('Server started at: ',port);
})

