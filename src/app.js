const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:80'] 
  };
  
app.use(cors(corsOptions));

app.use('/data', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});