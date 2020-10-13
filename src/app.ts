import path from 'path';
import http from 'http';
import express from 'express';
import router from './router';

const app = express();
// Set static folder
app.use(express.static(path.join(__dirname,'..', 'public')));
app.set('view engine', 'pug');
app.set('views', './public');
app.use(router);

const server = http.createServer(app);
server.listen(7780);
