// ------------------------------------------- lec_1

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to Express');
//     res.status(200);
//     res.end();
// });
// app.get('/login', (req, res) => {
//     res.json({ msg: 'Welcome to Login Page' });
//     res.end();
// });
// app.post('/login', (req, res) => {
//     res.send('Welcome to Login Post method');
//     res.end();
// });
// app.listen(2304, () => {
//     console.log('Server is connected at http://localhost:2304');
// });



// ----------------------------------------------- lec_2

// const express = require('express');
// const app = express();
// // const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFilesync('./friend.json', 'utf-8');
// // console.log(data);

// // POST, GET, PUT, PATCH, DELETE
// Server.get("/", (req,res)=>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// // Server.get("/", (req,res)=>{
// //     res.write('GET Method - 1');
// //     res.end();
// // })

// Server.post("/", (req,res)=>{
//     // res.write('Welcome to Post Method');
//     res.send('<h1>Send Method</h1>');
// })

// server.put("/", (req,res)=>{
//     res.json({message: 'Hello'});
// })

// server.patch("/", (res,req)=>{
//     res.status(400);
//     res.json({message:'Hello'})
// })

// server.get("/user", (req,res)=>{
//     res.json(json.parse(data));
// })

// serever.get("/login", (req,res)=>{
//     res.write('Welcome to Login Page');
//     res.end();
// })

// server.listen(2304, ()=>{
//     console.log('Server Start at http://localhost:2304');   
// })



// ------------------------------------------- lec_3 (Middleware)

// const express = require('express');
// const app = express();
// const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFilesync('./friend.json', 'utf-8');
// console.log(data);

// const Middleware = (req, res, next) => {
//     // console.log(req.query);
//     if(req.query.age >= "19")
//     {
//         console.log('Success');
//         next();        
//     }
//     else
//     {
//         res.json({message: "Sorry....."})
//     }
    
// }

// server.use(Middleware); //application

// POST, GET, PUT, PATCH, DELETE
// Server.get("/", (req,res)=>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// serever.get("/login", Middleware, (req,res)=>{
//     res.write('Welcome to Login Page');
//     res.end();
// })

// Server.post("/", (req,res)=>{
//     // res.write('Welcome to Post Method');
//     res.send('<h1>Send Method</h1>');
// })

// server.listen(2304, () => {
//     console.log('server start at http://localhost:2304');
// })




// -------------------------- Error handling middleware  -------------------------- 

// const express = require('express');
// const server = express();

// server.use((err,req,res,next) => {
//     console.error(err.stack);
//     res.status(500).send("Somthing Broke..!")
// })

// server.get('/' , (req,res) => {
//     res.send("Welcome to server");    
// } )

// server.listen(1122,()=>{
//     console.log('Server at http://localhost:1122');
// })


// const express = require('express');
// const server = express();

// // Define a route that intentionally triggers an error
// server.get('/', (req, res, next) => {
//     const err = new Error("Something went wrong!");
//     next(err);
// });

// // Error-handling middleware
// server.use("/",(err, req, res, next) => {
//     // console.error(err);  // Log the error stack trace for debugging
//     res.status(500).send("Something Broke..!");  // Send a 500 error response
// });

// // Start the server
// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });


// -------------------------- Route middleware -------------------------- 







// -------------------------- Built-in middleware -------------------------- 

// First type express.json()

// const express = require('express');
// const server = express();

// server.use(express.json());

// const myFun = (req,res,next) => {
//     console.log("Headers: ", req.headers); 
//     console.log(req.body);              
    // set method post then select row and select json data and add json like this 
    // {
    //     "Fname" : "vishva",
    //     "sname" : "v"
    // }
//     next();
// }

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })


// server.get("/login" , (req,res) =>{
//     res.write("Welcome to LoginPage")
//     res.end();
// })

// server.post("/", myFun, (req,res) =>{
//     res.setHeader('Content-type', "application/json"  )
//     res.write("Welcome to expressJS post ")
//     res.end();
// })

// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });

// Second type urlencoded


// const express = require('express');
// const server = express();

// server.use(express.urlencoded({extended:false}));

// const myFun = (req,res,next) => {
//     console.log(req.body);              
//     next();
// }

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })

// server.get("/login",myFun ,(req,res) =>{
//     res.write("Welcome to loginPAGE.")
//     res.end();
// })

// server.post("/", (req,res) =>{
//     res.setHeader('Content-type', "application/json" )
//     res.write("Welcome to expressJS post ")
//     res.end();
// })

// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });



// // static express
// const express = require('express');
// const server = express();

// server.use(express.urlencoded({extended:false}));
// server.use("/hello",express.static('public'));   // create folder named public then  create one file in that folder and apply routes in url

// const myFun = (req,res,next) => {
//     console.log(req.body);              
//     next();
// }

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })

// server.get("/login",myFun ,(req,res) =>{
//     res.write("Welcome to loginPAGE.")
//     res.end();
// })

// server.post("/", (req,res) =>{
//     res.setHeader('Content-type', "application/json" )
//     res.write("Welcome to expressJS post ")
//     res.end();
// })

// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });




// ------------------lec_4------------------

// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const users = require("./dummy.json");
// // console.log(users);

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req , res) => {
//     res.send("welcome to epress server");
// });

// // CRUD
// // Creat User
// app.post("/user", (req , res) => {
//     //  console.log(req.body);
//     users.push(req.body);
//     res.json({message: "user added success" });
// });

// // READ - get all users
// app.get("/user", (req, res) => {
//     res.json(users);
// });

// // get single user
// app.get("/user/:id", (req, res) => {
//     let id = +req.params.id;
//     let item = users.find((user)=>user.id === id)
//     res.json(item);
// });

// app.listen(2006, () => {
//     console.log(`server start at http://localhost:2006`);   
// });
 


// const express = require("express") ;
// const morgan = require("morgan") ;
// const app = express() ;
// // const product = require('./product.json') 
 
// app.use(morgan('dev')) 
// app.use(express.json()) 
// app.use(express.urlencoded({extended:false})) 
 
// app.get('/',(req,res) => { 
//     res.send('Welcome To Express Server 1210') 
// }) 
 
// // // CRUD 
// // // Create Product data 
 
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


// mongodb+srv://vishvavaghasiya0:<password>@cluster0.0vj6p.mongodb.net/


// --------------------------lecture6----------------------------------------


// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// const userRoutes = require('./routes/user.routes')

// // const productRoutes = require('./routes/product.routes')
// // console.log(users)

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.send("Welcome To Express Server...")
// })

// app.use("/user" , userRoutes);

// app.use("/product" , productRoutes);

// app.listen(1412, () => {
//     console.log("Server Start At http://localhost:1412")
// })

// --------------------------lecture9---------------------------------------- 
 
 
// const express = require('express'); 
// const morgan = require('morgan'); 
// const app = express(); 
// const mongoose = require("mongoose"); 
// const userRoutes = require('./routes/user.routes'); 
// const productRoutes = require('./routes/product.routes'); 
// // console.log(users) 
 
// app.use(morgan('dev')) 
// app.use(express.json()) 
// app.use(express.urlencoded({ extended: false })) 
 
// app.get('/', (req, res) => { 
//     res.send("Welcome To Express Server...") 
// }) 
 
// app.use("/api/user" , userRoutes); 
 
// app.use("/api/product" , productRoutes); 
 
// app.listen(1412, () => { 
//     // Database Connection 
//     mongoose 
//     .connect("mongodb+srv://vishvavaghasiya0:vishva%401794@cluster0.0vj6p.mongodb.net/") 
//     .then(() => { 
//     console.log("Database connection established  successfully") 
//     }) 
//     .catch((err) => console.log(err)) 
//     console.log("Server Start At http://localhost:1412") 
// })