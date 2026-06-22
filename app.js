require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/index');
const errorHandler = require('./src/middleware/error.middleware');
const db = require('./src/database/models/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
  .then(() => db.sequelize.sync({ force: false }))
  .then(() => {
    console.log('Database connected & tables ready');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });
