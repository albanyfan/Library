if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()};

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const db = require('./db');

const indexRouter = require('./routes/index');

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('client'));

app.use('/', indexRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port: ${port}`)
})