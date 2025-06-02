import express from 'express'


const app = express()
app.listen(8080, () =>{
    console.log("Server Started");
});

app.get("/", (req,res) => {
    return res.send("Good Morning");
});

app.get("/greet",(req,res)=>(res.send("Greetings")))
app.get("/names",(req,res)=>(res.send("Amrutha")))
