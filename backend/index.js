const express = require("express")
const cors = require("cors")

const app = express();
const dummyContacts = [
    {
        id: 101,
        name: "test1",
        age: 20,
        phone: 3434343
    },
    {
        id: 102,
        name: "test2",
        age: 22,
        phone: 22222
    },
    {
        id: 103,
        name: "test3",
        age: 23,
        phone: 3333333
    },
    {
        id: 104,
        name: "test4",
        age: 24,
        phone: 44444
    }
]
app.use(cors())
app.get("/hello",function(req,res){
    res.send("hello from nodejs")
})

app.get("/contacts",function(req,res){
    res.send(dummyContacts)
})

app.listen(8000,()=>{
    console.log("server started at 8000")
})