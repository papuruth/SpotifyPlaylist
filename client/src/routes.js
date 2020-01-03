import SelectedTracksInfo from "./components/selected-track-details";
import { ListPlayList } from "./containers/AppContainer";
import { AllTracksInfo } from "./containers/allTracks";
import { Search } from "./containers/search";
import SearchedTracks from "./components/searched-tracks";

const routes = [
    {
        path: "/",
        exact: true,
        component: ListPlayList
    },
    {
        path: "/alltracks",
        component: AllTracksInfo
    },
    {
        path: "/trackdetails",
        component: SelectedTracksInfo
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: '/tracks',
        component: SearchedTracks
    }
]

export default routes;