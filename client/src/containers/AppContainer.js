import { connect } from 'react-redux'
import ListPlayList from '../components/ListPlayList';

function mapStateToProps(state) {
    const { countryInfo } = state.CountryInfo;
    const { spotifyPlaylist, message } = state.SpotifyPlaylistData;
    return {
        countryInfo,
        spotifyPlaylist,
        message
    }
}
const connectedListPlayList = connect(mapStateToProps)(ListPlayList);
export {
    connectedListPlayList as ListPlayList
}