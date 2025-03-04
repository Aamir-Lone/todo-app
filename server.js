
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
