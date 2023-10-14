import mongoose from 'mongoose';
import env from '../config.js';

async function connect() {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(env.ATLAS_URI);
    console.log('Database Connected');
    return db;
}

export default connect;
