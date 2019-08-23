import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import { getHash, generateRandomString } from './util';

const MAX_TIME = 3600 * 1000;

export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const CLIENT_ID = process.env.CLIENT_ID;

const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now());
const setLocalAccessToken = token => {
  setTokenTimestamp();
  window.localStorage.setItem('spotify_access_token', token);
};
const setLocalRefreshToken = token => window.localStorage.setItem('spotify_refresh_token', token);
const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');
const getLocalAccessToken = () => window.localStorage.getItem('spotify_access_token');
const getLocalRefreshToken = () => window.localStorage.getItem('spotify_refresh_token');

const refreshAccessToken = async () => {
    try {
      const { data } = await axios.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
      const { access_token } = data;
      setLocalAccessToken(access_token);
      window.location.reload();
      return;
    } catch (e) {
      console.error(e);
    }
  };
  
  export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHash();
  
    if (error) {
      console.error(error);
      refreshAccessToken();
    }
  
    if (Date.now() - getTokenTimestamp() > MAX_TIME) {
      console.warn('Access token has expired, refreshing...');
      refreshAccessToken();
    }
  
    const localAccessToken = getLocalAccessToken();
    const localRefreshToken = getLocalRefreshToken();
  
    if (!localRefreshToken || localRefreshToken === 'undefined') {
      setLocalRefreshToken(refresh_token);
    }
  
    if (!localAccessToken || localAccessToken === 'undefined') {
      setLocalAccessToken(access_token);
      return access_token;
    }
  
    return localAccessToken;
  };
  
  export const token = getAccessToken();
  
  export const logout = () => {
    window.localStorage.removeItem('spotify_token_timestamp');
    window.localStorage.removeItem('spotify_access_token');
    window.localStorage.removeItem('spotify_refresh_token');
    window.location.reload();
  };

  const HEADERS  = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  export const getUser = () => axios.get('https://api.spotify.com/v1/me', { HEADERS });

  export const getRecentlyPlayed = () => axios.get('https://api.spotify.com/v1/me/player/recently-played', { HEADERS });

  export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { HEADERS });

  export const getRecentTopArtists = () => axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', { HEADERS });

  export const getRecentTopTracks = () => axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { HEADERS });

  export const getPlaylist = playlistId => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { HEADERS });

  export const getPlaylistTracks = playlistId => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { HEADERS });

  export const getReccsForTracks = tracks => {
    const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
    const seed_tracks = getTrackIds(shuffledTracks.slice(0, 5));
    const seed_artists = '';
    const seed_genres = '';
  
    return axios.get(
      `https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}&seed_artists=${seed_artists}&seed_genres=${seed_genres}`,
      {
        HEADERS,
      },
    );
  };

  export const getUserInfo = () => {
    return axios
      .all([getUser(), getFollowing(), getPlaylists(), getTopArtistsLong(), getTopTracksLong()])
      .then(
        axios.spread((user, followedArtists, playlists, topArtists, topTracks) => {
          return {
            user: user.data,
            followedArtists: followedArtists.data,
            playlists: playlists.data,
            topArtists: topArtists.data,
            topTracks: topTracks.data,
          };
        }),
      );
  };