import path from 'path';

export const MONGODB_CONNECTION = "";

export const JWT_SECRET = "";
export const JWT_EXPIRATION_TIME = 60 * 60 * 24 * 30;

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50MB"
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 10 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed

export const WEB_CACHE = false;
export const PORT = 8080;

export function UPLOAD_FALDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName);
}