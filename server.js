const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const tranasctions = require('./routes/transactions');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const app = express();


app.use(express.json());

app.use('/api/v1/transactions',tranasctions);




const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));