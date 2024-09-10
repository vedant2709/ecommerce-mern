const express=require("express")
const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
    return res.send("Server Working")
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})