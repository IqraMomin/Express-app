const express = require('express');

const router = express.Router();

const categories = [
    {id:1,categoryName:"Electronics"},
    {id:2,categoryName:"Accessories"},
    
]


router.get("/",(req,res)=>{
    res.json({
        message:"Here is the list of all categories ",
        data:categories
    });
})

router.post("/",(req,res)=>{
    const {categoryName} = req.body;
    const newCategory = {id:categories.length+1,categoryName};
    categories.push(newCategory);
    res.status(201).json(newCategory);
})

module.exports = router;