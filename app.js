const express = require('express');
const app = express();
const productRouter = require("./routes/products")
const categoriesRouter = require('./routes/categories');

const port = 4000;

app.use(express.json());

app.use("/products",productRouter);

app.use("/categories",categoriesRouter);



app.use((req,res,next)=>{
    const method = req.method;
    const endpoint = req.url;
    console.log(`${method} request is made to ${endpoint}`);
    next();
})
app.get("/welcome/:username",(req,res)=>{
    const username = req.params.username;
    const role = req.query.role;
    res.send(`Welcome ${username} your role is ${role}`)
})


app.use((req,res,next)=>{
    res.status(404).send(`<h1>404 - Page not found</h1>`);
})

app.listen(port,()=>{
    console.log("Server is Up and Running on port ",port);
})