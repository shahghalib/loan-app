require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/index');
const errorHandler = require('./src/middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

// All routes start from /api — declared once here
app.use('/api', router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const sequelize = require('./src/database/index');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected & tables ready');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });
