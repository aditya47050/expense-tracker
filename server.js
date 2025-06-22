import express from 'express';
import dotenv from 'dotenv';
import {sql} from './config/db.js'
import transactionsRoute from './router/transactionsRoute.js'
import ratelimiter from './middleware/rateLimiter.js'

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 2000

app.use(express.json());
app.use(ratelimiter)

async function initDB(){
    try{
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log("Database initialized successfully")
    }catch (error){
        console.log("Error initiallizing database",error);
        process.exit(1);
    }
}


app.use("/api/transactions",transactionsRoute);




initDB().then(()=>{
app.listen(PORT,()=>{
    console.log("Server is running at Port : ",PORT)
})
});