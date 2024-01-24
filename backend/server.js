const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('../backend/middleware/errorMiddleware');

const app = express();
/* for body read request */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Rout Path */
app.use('/api/table', require('./routes/tableRoutes'));
/*midlware use,,, if you don't use postman will not show error in json formate*/
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server satrted on port ${port}`);
});
