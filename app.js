const express = require('express');
const app = express();

const port = 4000;

const products = [
    {id:1,productName:"Mobile"},
    {id:2,productName:"Laptop"},
    {id:3,productName:"Computers"},
    {id:4,productName:"Mobile Cover"},
    {id:5,productName:"Laptop Case"},     
]

const category = [
    {id:1,categoryName:"Electronics"},
    {id:2,categoryName:"Accessories"},
    
]

app.get("/products",(req,res)=>{
    res.json({
        message:"Here is the list of all products ",
        data:products
    });
})

app.post("/products",(req,res)=>{
    const {productName} = req.body;
    const newProduct = {id:products.length+1,productName};
    products.push(newProduct);
    res.status(201).json(newProduct);
})

app.get("/category",(req,res)=>{
    res.json({
        message:"Here is the list of all category ",
        data:category
    });
})

app.post("/category",(req,res)=>{
    const {categoryName} = req.body;
    const newCategory = {id:category.length+1,categoryName};
    category.push(newCategory);
    res.status(201).json(newCategory);
})

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
})

app.listen(port,()=>{
    console.log("Server is Up and Running on port ",port);
})