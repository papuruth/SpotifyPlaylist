import { connect } from 'react-redux'
import AllTracksInfo from '../components/tracks-component';

function mapStateToProps(state) {
    const { allTracks } = state.AllTracksData;
    return {
        allTracks
    }
}
const connectedAllTracks = connect(mapStateToProps)(AllTracksInfo);
export {
    connectedAllTracks as AllTracksInfo
}