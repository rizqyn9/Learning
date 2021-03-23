const express = require('express')
const session = require('express-session')
const mongoose =require('mongoose')
const MongoDBSession =require('connect-mongodb-session')(session)
const cookie = require('cookie-parser')
const app = express()
const UserModels = require('./models/User')
const appController = require('./controller/appController')
const isAuth = require('./middlewares/is-auth')
const mongoURL = 'mongodb://localhost:27017/session'

mongoose.connect(mongoURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("DB Connected");
}).catch(err => {
    console.log(err);
})

const store = new MongoDBSession({
    uri:mongoURL,
    collection:'session'
})

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:"bocilllssadasd",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000
    },
    store:store
}))

//=================== Routes
// Landing Page
app.get("/", appController.landing_page);

// Login Page
app.get("/login", appController.login_get);
app.post("/login", appController.login_post);

// Register Page
app.get("/register", appController.register_get);
app.post("/register", appController.register_post);

// Dashboard Page
app.get("/dashboard", isAuth, appController.dashboard_get);

app.post("/logout", appController.logout_post);


app.listen(3005, () => {
    console.log('http:///localhost:3005');
})