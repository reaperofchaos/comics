var express = require('express');
const mongoose = require('mongoose');
const comic = require('./src/models/Comic.js');
const routes = require('./src/routes/comicRoutes');
const uploadFileMiddleware = require('./src/middleware/upload')
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config(); 
global.__basedir = __dirname;
const port = process.env.PORT || 7777;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/comics', { useNewUrlParser: true, useUnifiedTopology: true  });

var corsOptions = {
    origin: `http://localhost:3000`
}
const app = express();
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(uploadFileMiddleware.uploadFile); 
app.use('/covers', express.static('covers'))

routes(app);


app.listen(port);
console.log("Api server started on: " + port);