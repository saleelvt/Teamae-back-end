const express = require('express');
const db = require('./config/db');
const blogRouter = require('./routes/blogRoute');
const blogTwoRouter = require('./routes/blogTwoRoute');
const Admin = require("./model/adminModel")
const cors = require('cors');

require('dotenv').config();


const app = express();
app.use(cors({
  origin: '*', // Allow only your frontend              
}));

 

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const PORT = process.env.PORT;  


const insertAdmin = async () => {
  const sampleAdmin = {
    userName: "TeamAe",
    email: "teamaedb@gmail.com",
    password: "admin@13",
  };

  

  try {
    const existingAdmin = await Admin.findOne({ email: sampleAdmin.email });
    if (!existingAdmin) {
      const newAdmin = new Admin(sampleAdmin);
      await newAdmin.save();
      console.log("this is the admin now ", newAdmin);
    } else {
      console.log(" ADMIN ALLREDY EXISTED  ");
    }
  }  catch (error) {
    console.error("Failed to insert sample admin:", error);
  }
};
  insertAdmin()






app.use('/apiTwo',blogTwoRouter);
app.use('/api',blogRouter);


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});




app.listen(PORT, () => {
   console.log("connected succesfully",PORT ,`http://localhost:${PORT}`)
});


