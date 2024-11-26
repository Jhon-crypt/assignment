const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./db');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Root route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/', (req, res) => {
  res.render('home');
});

// Routes
app.use('/auth', require('./controllers/authController'));
app.use('/cart', require('./controllers/cartController'));
app.use('/products', require('./controllers/productController'));
app.use('/payment', require('./controllers/paymentController'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
