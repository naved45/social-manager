import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRouter from "./routes/authRoutes";
import socialAuthRouter from "./routes/socialAuthRoutes";

const app = express();

// Database connection
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
})();

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/auth", authRouter);
app.use("/api/oauth", socialAuthRouter);

// Global Error Handler
app.use(
  (err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res
      .status(500)
      .send(err?.response?.data?.message || err?.message || "Server Error");
  }
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
































/*import "dotenv/config";
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import connectDB from './config/db';
import authRouter from './routes/authRoutes';
import socialAuthRouter from './routes/socialAuthRoutes';


const app = express();

//databse connection
await connectDB();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use("/api/auth",authRouter)
app.use("/api/oauth",socialAuthRouter)

//Global Error Handler

app.use(err:any, _req:Request, _res:Response, _next:NextFunction)=>{
  console.error(err);
  resizeBy.status(500).send(err?.response?.data?.message || err?.message)
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


*/