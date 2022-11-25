const express=require("express")	
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2003

app.use(bodyParser.urlencoded({
	extended:true
}))
 
 app.use(bodyParser.json())

 app.use(cors())

 app.get("/",(req,res)=>{
  res.send("vibe alone")
 })

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,password}=req.body
	console.log(name)
	console.log(password)
	res.send("added successfully")
})

 app.listen(port,()=>console.log("Server"))
