import cors from "cors";
import express,{ type Application , type Response, type Request} from "express";
import { userRoute } from "./modules/user/user.route";

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

app.use("/api/auth/signup",userRoute);

export default app;