// src/db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyasingh:Priya@cluster0.kepu1bm.mongodb.net/movies?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
