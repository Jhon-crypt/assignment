# Create root directories
mkdir controllers node_modules public views

# Create root files
touch app.js db.js package.json package-lock.json

# Create basic package.json content
cat > package.json << EOL
{
  "name": "chips-ecommerce",
  "version": "1.0.0",
  "description": "Chips ecommerce website",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mysql2": "^2.3.3",
    "sequelize": "^6.6.5",
    "bcryptjs": "^2.4.3",
    "express-session": "^1.17.2",
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
EOL

# Initialize npm and install dependencies
npm install

# Create views directory structure
mkdir -p views/layouts
mkdir -p views/partials

# Move HTML files to views (assuming they're in current directory)
mv *.html views/

# Create controllers directory structure
touch controllers/authController.js
touch controllers/cartController.js
touch controllers/productController.js
touch controllers/paymentController.js

# Create public directory structure
mkdir -p public/css
mkdir -p public/js
mkdir -p public/images

# Create basic app.js structure
cat > app.js << EOL
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

// Routes
app.use('/auth', require('./controllers/authController'));
app.use('/cart', require('./controllers/cartController'));
app.use('/products', require('./controllers/productController'));
app.use('/payment', require('./controllers/paymentController'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
EOL

# Create basic db.js structure
cat > db.js << EOL
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

module.exports = sequelize;
EOL

# Create .env file
cat > .env << EOL
DB_NAME=chips_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
PORT=3000
SESSION_SECRET=your-secret-key
EOL

# Create .gitignore
cat > .gitignore << EOL
node_modules/
.env
.DS_Store
EOL