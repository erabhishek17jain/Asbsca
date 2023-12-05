import dotenv from 'dotenv';
import path = require('path');

let envPath: string;
if (__dirname.includes("build")) {
    envPath = path.join(__dirname, "./.env.production");
} else {
    envPath = path.join(__dirname, "./.env.development");
}
dotenv.config({
    path: envPath,
});

const CONFIG = {
    JWT_SECRET: process.env.JWT_SECRET || '',
    EMAIL: process.env.EMAIL || '',
    PASSWORD: process.env.PASSWORD || '',
    ATLAS_URI: process.env.ATLAS_URI || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    CLIENT_SECRET: process.env.CLIENT_SECRET || '',
    email: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
    },
    ADMIN_ROLE_ID: process.env.ADMIN_ROLE_ID || '',
    CLIENT_URL: process.env.CLIENT_URL || '',
};

export default CONFIG;