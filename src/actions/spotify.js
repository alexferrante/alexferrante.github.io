import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import { getHash, generateRandomString } from './util';

const MAX_TIME = 3600 * 1000;

export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const CLIENT_ID = 'ddc657555e9d442bbff96cc4885ca04d';
export const REDIRECT_URI = 'http://localhost:9000/';
