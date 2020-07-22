const CONSTANTS = require('../../constants')
let accessToken = undefined;
let expiresIn = undefined;
 
export function getAccessToken() {
    if (accessToken) {
        return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        expiresIn = urlExpiresIn[1];
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
    } else {
        window.location = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${CONSTANTS.SPOTIFY.clientId}&redirect_uri=${CONSTANTS.SPOTIFY.redirectUri}`;
    }
    return accessToken;
}