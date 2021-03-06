const express =  require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const path = require('path')

const app = express();

// Connect Database

connectDB();

app.use(express.static(path.join(__dirname, 'public')));

// Init Middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));


// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });


app.listen(PORT, () => console.log(`server started on port ${PORT}`));