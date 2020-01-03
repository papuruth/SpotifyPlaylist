import { combineReducers } from 'redux';

import {CountryInfo, SpotifyPlaylistData, AllTracksData, SearchSpotify} from './spotifyPlayList/spotify-playlist-reducers'

const rootReducer = combineReducers({
  CountryInfo,
  SpotifyPlaylistData,
  AllTracksData,
  SearchSpotify
});

export default rootReducer;