import { getAccessToken } from './spotifyUtil';
import * as SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi;

export function initSpotify() {
    let accessToken = getAccessToken();
    spotifyApi.setAccessToken(accessToken);
}

export function getUser() {
    
}