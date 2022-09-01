const express = require('express')
const app= express()

app.get("/api", (req,res)=> {
    res.json({"users": ["u1","u2","u3"]})
})
app.listen(5000,()=>{
    console.log("server started on port 5000")
})