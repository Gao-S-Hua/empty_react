const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');

// Instance App---------------
const port = 8000;
const app = express();
app.use(logger);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routers:
app.use('/api/user', require('./routes/user'));
app.use('/api/team', require('./routes/team'));


app.listen(port, () => console.log(`Listening on port ${port}`))
