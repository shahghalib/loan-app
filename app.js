require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/index');
const errorHandler = require('./src/middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
