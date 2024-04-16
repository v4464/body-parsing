const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><input type="number" name="size"><button type="submit">add product</button></form>')
})

app.use('/product',(req,res,next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/')
})
app.use('/',(req,res,next) => {
    res.send('<h1>welcome to node.js</h1>');
})

app.listen(3000)