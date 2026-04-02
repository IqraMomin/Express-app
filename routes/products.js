const express = require('express');

const router = express.Router();
const products = [
    {id:1,productName:"Mobile"},
    {id:2,productName:"Laptop"},
    {id:3,productName:"Computers"},
    {id:4,productName:"Mobile Cover"},
    {id:5,productName:"Laptop Case"},     
]

router.get("/",(req,res)=>{
    res.json({
        message:"Here is the list of all products ",
        data:products
    });
})

router.post("/",(req,res)=>{
    const {productName} = req.body;
    const newProduct = {id:products.length+1,productName};
    products.push(newProduct);
    res.status(201).json(newProduct);
})

module.exports = router;