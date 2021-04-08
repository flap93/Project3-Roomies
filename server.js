const express =  require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const path = require('path')

const app = express();

// Connect Database

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Static files for our backend 
app.use(express.static(path.join(__dirname, '/client/build')))


// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`));