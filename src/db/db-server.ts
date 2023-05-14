import mongoose from 'mongoose';
import config from '../../config/config.json'

const db_connect = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(config.mongo.connectionString)
    .then(() => console.log('Connected!'));
}

export default db_connect;