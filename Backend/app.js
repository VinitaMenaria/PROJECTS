const express = require('express');
const colors=require('colors');
const app= express();
const dbConnect=require('./db.js')
const PORT =3000;
const validator=require('validator')
const errorHandler=require ('./middleware/errorhandle')
const cors=require('cors');
app.use(cors())
// parse the data 
app.use(express.json());
// Checking how validator Works
// console.log(validator.isStrongPassword("Hello1@2",{
//     minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
// }))

dbConnect();

// console.log(colors.yellow(validator.validate("test@email.com")))
// app.use('/api',require('/routes/UserRoutes'))

// global route errorHandler

app.use('/api',require('./routes/UserRoutes.js'));
app.use((req,res,next)=>{
    res.status(404).send(`requested url ${req.url} not found`)
    next()
})
// Global error
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(colors.yellow(`App is Listening on the PORT :${PORT}`));
})
// {
//     name: 'vaibhav',
//     email:'vaibhav@gmail.com',
//     phone: '888',
//     password:'fdsdsv'
// }