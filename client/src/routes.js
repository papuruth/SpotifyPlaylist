import SelectedTracksInfo from "./components/selected-track-details";
import { ListPlayList } from "./containers/AppContainer";
import { AllTracksInfo } from "./containers/allTracks";

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
    }
]

export default routes;