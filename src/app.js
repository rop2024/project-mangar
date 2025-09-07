import express from "express";
import cors from "cors";

const app = express();

// basic configuration
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// cors configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials : true,
    methods : ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders : ["Content-Type", "Authorization"] 
}))

app.get('/', (req, res) => {
  res.send('This works lol!')
})

app.get('/home', (req,res) => {
  res.send("This is home page")
})

export default app;