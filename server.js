
// const express = require('express') 
// const morgan = require('morgan') 
// const app = express() 
// const product = require('./product.json') 
 
// app.use(morgan('dev')) 
// app.use(express.json()) 
// app.use(express.urlencoded({extended:false})) 
 
// app.get('/',(req,res) => { 
//     res.send('Welcome To Express Server 1210') 
// }) 
 
// // CRUD 
// // Create Product data 
 
// app.post('/product' , (req,res) => { 
//     // console.log(req.body); 
//     product.push(req.body); 
//     res.json({message : "Product added Successfully"}) 
// }) 
 
// // Read Product data - get all products 
 
// app.get('/product' , (req,res) => { 
//     res.json(product) 
// }) 
 
// // Get Single Product 
 
// app.get('/product/:id' , (req,res) => { 
//     let id = +req.params.id; 
//     let pro = product.find(item => item.id === id); 
//     res.json(pro) 
// }) 
 
// // Replace Data - put 
// app.put('/product/:id' , (req,res) => { 
//     let id = +req.params.id; 
//     let index = product.findIndex((item) => item.id === id); 
//     product.splice(index , 1 , req.body); 
//     res.json({message : "Product Replaced Successfully"}); 
// })


// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const userRoutes = require('./routes/user.routes');
// // console.log(users);

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//     res.send("welcome to express server");
// })

// app.use("/user", userRoutes);

// app.listen(2006, () => {
//     console.log(`server start at http://localhost:2006`);
    
// });




// -----------product------------

// const express = require('express')
// const morgan = require('morgan')
// const { updateUserPro } = require('./controller/product.controller')
// const app = express()

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// app.get('/',(req,res) => {
//     res.send('Welcome To Express Server 1412')
// })

// // CRUD
// // Create Product data

// app.post('/product' , addNewUserPro );

// // Read Product data - get all products

// app.get('/product' , getAllUsersPro);

// // Get Single Product

// app.get('/product/:id' , getUserPro)

// // Replace Data - put
// app.put('/product/:id' , replaceUserPro)

// // Update data - PATCH

// app.patch('/product/:id' , updateUserPro)

// // Delete Data - DELETE

// app.delete("/product/:id" , deleteUserPro)


