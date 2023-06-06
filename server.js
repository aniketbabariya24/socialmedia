const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();



app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send(
    `<h1 style="text-align:Center;color:blue">Welcome in Social Media App</h1>`
  )
);


const userRouter=require('./routes/route.user')
const postRouter=require('./routes/route.post')


app.use('/users',userRouter) 
app.use('/posts',postRouter )


const {dbconnetion}= require('./configs/db');

app.listen(8080, async () => {
  try {
    await dbconnetion;
    console.log(`Connected to Database`);
    console.log(`Server listening on 8080`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});
