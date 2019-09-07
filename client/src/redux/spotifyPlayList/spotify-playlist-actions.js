import { spotifyPlaylistConstants } from "./spotify-playlist-constants";
import { SpotifyPlaylistService } from "./spotify-playlist-services";

export const SpotifyPlaylistAction =  {
    SpotifyPlaylist,
    CountryInfo,
    AllTracks
}

function CountryInfo(params) {
    return dispatch => {
        dispatch(request());
        SpotifyPlaylistService.CountryInfo(params)
            .then((data) => {
                dispatch(success(data))
            })
            .catch((error) => {
                dispatch(failure(error));
            })
    };
    function request() { return { type: spotifyPlaylistConstants.GET_COUNTRY_INFO_REQUEST} }
    function success(data) { return { type: spotifyPlaylistConstants.GET_COUNTRY_INFO_SUCCESS, data } }
    function failure(error) { return { type: spotifyPlaylistConstants.GET_COUNTRY_INFO_FAILURE, error } }
}

function SpotifyPlaylist(token, country, locale) {
    return dispatch => {
        dispatch(request());
        SpotifyPlaylistService.SpotifyPlaylist(token, country, locale)
            .then((data) => {
                dispatch(success(data))
            })
            .catch((error) => {
                dispatch(failure(error));
            })
    };
    function request() { return { type: spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_REQUEST} }
    function success(data) { return { type: spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_SUCCESS, data } }
    function failure(error) { return { type: spotifyPlaylistConstants.GET_SPOTIFY_PLAYLIST_FAILURE, error } }
}

function AllTracks(token, api) {
    return dispatch => {
        dispatch(request());
        SpotifyPlaylistService.AllTracks(token,api)
            .then((data) => {
                dispatch(success(data))
            })
            .catch((error) => {
                dispatch(failure(error));
            })
    };
    function request() { return { type: spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_REQUEST} }
    function success(data) { return { type: spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_SUCCESS, data } }
    function failure(error) { return { type: spotifyPlaylistConstants.GET_PLAYLIST_TRACKS_FAILURE, error } }
}