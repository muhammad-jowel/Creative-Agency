import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import router from "./routes/api.js";
import 'dotenv/config'


const app = express();

// App Use Middlewares
app.use(express.json({limit: process.env.MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: process.env.URL_ENCODE || 'false' }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload());


// Rate Limiting
const limiter = rateLimit({windowMs: process.env.REQUEST_TIME, max: process.env.REQUEST_NUMBER });
app.use(limiter);


// Web Cache
app.set('etag', process.env.WEB_CACHE === 'false' ? false : true);


// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {autoIndex: true}).then(() => {
    console.log('MongoDB Connected...')
}).catch(() => {
    console.log('Failed to connect to MongoDB...')
});


// Routes
app.use('/api', router);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})