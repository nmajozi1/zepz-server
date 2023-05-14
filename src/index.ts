import express from 'express';
import config from '../config/config.json';
import cors from 'cors'; 
import bodyParser from 'body-parser';
import activityRoute from './routes/activity.route';
import db_connect from './db/db-server';

const app = express();
db_connect();

app.use(cors());
app.use(bodyParser.json());
app.use(activityRoute);

app.listen(config.port, () => console.log(config.port));