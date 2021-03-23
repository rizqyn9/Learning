require('dotenv').config();
const express = require('express');
const app = express()

const PORT = process.env.PORT_HOST
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    // function/route handler.
    next();  
 });
 
 app.get('/home', (req, res) => {
   res.send('Home Page');
 });
 
 app.get('/about', (req, res) => {
   res.send('About Page');
 });

app.get('*',(req,res) => {
    res.send("Page Not Found")
})

app.listen(PORT,()=> {
    console.log(`Running in http://localhost:${PORT}`);
})