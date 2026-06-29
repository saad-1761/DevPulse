import cors from "cors";
import express,{ type Application , type Response, type Request} from "express";

const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use(
  cors({
    origin: "http://localhost:5000",
  }),
);

app.get("/",(req:Request,res:Response)=>{
 res.status(200).json({
    message: "Welcome to DevPulse API",
    author: "Saad",   
 })
}
)

export default app;