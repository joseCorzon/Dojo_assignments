const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// const User = [
//     {_id:"", firstName:"", lastName:"", phoneNumber:"", email:"", password:""},
//     {_id:"", firstName:"", lastName:"", phoneNumber:"", email:"", password:""}
// ]

// const Company=[]
class User {
    constructor() {
    this._id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password =faker.internet.password();
    }
}

class Company {
    constructor() {
    this._id = faker.datatype.number();
    this.name = faker.company.companyName();
    this.address = faker.address.streetAddress();
    
    }
}


//routes
app.get("/api/user", (req,res)=>{
    let fakeUser = new User();
    res.json({fakeUser})
})

app.get("/api/company", (req,res)=>{
    let fakeCompany = new Company();
    res.json({fakeCompany})
})

app.get("/api/user/company", (req,res)=>{
    let fakeUser = new User();
    let fakeCompany = new Company();
    res.json({fakeUser, fakeCompany})
})

// app.get("/api/:idx", (req,res) =>{
//     res.json({user: User[req.params.idx]})
// })

// app.post("/api", (req,res)=>{
//     User.push(req.body)
//     res.json({results: User})
// })

// app.put("/api/:idx", (req,res)=>{
//     User[req.params.idx] = req.body
//     res.json({user: User[req.params.idx]})
// })

// app.delete("/api/:idx", (req,res)=>{
//     User.splice(req.params.idx, 1);
//     res.json({results: User})
// })




app.listen( port, () => console.log(`Listening on port: ${port}`) );