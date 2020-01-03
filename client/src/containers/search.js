import { connect } from 'react-redux'
import Search from '../components/search';

function mapStateToProps(state) {
    const { searchedData } = state.SearchSpotify;
    return {
        searchedData
    }
}
const connectedSearch = connect(mapStateToProps)(Search);
export {
    connectedSearch as Search
}