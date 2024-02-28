require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')


// db Connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`${process.env.BASE_URL}`);
  console.log('Database connected...');
}

// Body parser
server.use(cors())
server.use(express.json());
server.use(morgan('dev'));

// server start
server.listen(process.env.PORT,()=>{
    console.log("Server Start...")
})
