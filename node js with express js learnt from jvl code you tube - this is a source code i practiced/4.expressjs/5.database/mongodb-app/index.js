const express = require('express');
const db = require('./db');
const app = express();
const userRoutes = require('./router/users')

app.use(express.json());
//User Routes
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes)

app.listen(3000, () =>{
    console.log('Server started on port 3000');
})

