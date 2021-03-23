require('dotenv').config()
const express = require('express')
const app = express()


const port = process.env.PORT

const apiRoutes = require('./src/routes/api') 

app.use('/', apiRoutes)




app.listen(port,()=> {
    console.log(`Server running on http://localhost:${port}`);
})
