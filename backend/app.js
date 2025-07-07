const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(cors({
  origin: 'http://localhost:3004',
  credentials: true
}));
app.use(bodyParser.json());
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});