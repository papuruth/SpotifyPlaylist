import { spotifyPlaylistConstants } from "./spotify-playlist-constants";

const initialState = {
    countryInfo: null,
    spotifyPlaylist: [],
    allTracks: []
}

export function CountryInfo(state = initialState, action) {
    switch (action.type) {
        case spotifyPlaylistConstants.GET_COUNTRY_INFO_REQUEST:
            return {
                ...state
            };
        case spotifyPlaylistConstants.GET_COUNTRY_INFO_SUCCESS:
            return {
                ...state,
                countryInfo: action.data,
            };
        case spotifyPlaylistConstants.GET_COUNTRY_INFO_FAILURE:
            return {
                ...state,
            };
        default:
            return state
    }
}

export function SpotifyPlaylistData(state = initialState, action) {
    switch (action.type) {
        case spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_REQUEST:
            return {
                ...state
            };
        case spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_SUCCESS:
            return {
                ...state,
                message: action.data.message,
                spotifyPlaylist: action.data.playlists,
            };
        case spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_FAILURE:
            return {
                ...state,
                spotifyPlaylist: []
            };
        default:
            return state
    }
}

export function AllTracksData(state = initialState, action) {
    switch (action.type) {
        case spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_REQUEST:
            return {
                ...state
            };
        case spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_SUCCESS:
            return {
                ...state,
                allTracks: action.data,
            };
        case spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_FAILURE:
            return {
                ...state,
                allTracks: []
            };
        default:
            return state
    }
}