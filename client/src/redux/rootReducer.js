import { combineReducers } from 'redux';

import {CountryInfo, SpotifyPlaylistData, AllTracksData} from './spotifyPlayList/spotify-playlist-reducers'

const rootReducer = combineReducers({
  CountryInfo,
  SpotifyPlaylistData,
  AllTracksData
});

export default rootReducer;