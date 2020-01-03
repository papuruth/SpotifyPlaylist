import React, { Component } from 'react';
import { SpotifyPlaylistAction } from '../redux/spotifyPlayList/spotify-playlist-actions';

class AllTracksInfo extends Component {
    constructor(props) {
        super(props);
        const api = this.props.location.state.api;
        const token = this.props.location.state.token;
        this.state = {
            allTracks: []
        }
        this.props.dispatch(SpotifyPlaylistAction.AllTracks(token, api));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return {
                allTracks: nextProps.allTracks
            }
        }
    }

    trackDetails = (data) => {
        this.props.history.push('/trackdetails', data)
    }
    render() {
        try {
            const { allTracks } = this.state;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div>
                                {
                                    <React.Fragment>
                                        {
                                            allTracks && <a href={allTracks.external_urls['spotify']}>
                                                <img src={allTracks.images[0].url} alt={allTracks.name}/>
                                            </a>
                                        }
                                        <h1 style={{ color: '#fff' }}>{allTracks.name}</h1>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                    <section className="tracklist-container tracklist-container1">
                        <ol className="tracklist">
                            {
                                allTracks && allTracks.tracks.items.map((item, index) => {
                                    return (
                                        <div className="react-contextmenu-wrapper" key={index}>
                                            <div draggable={true}>
                                                <li className="tracklist-row" onClick={() => this.trackDetails(item.track)}>
                                                    <div className="tracklist-col position-outer">
                                                        <div className="tracklist-play-pause tracklist-top-align">
                                                            <svg className="icon-play" viewBox="0 0 85 100">
                                                                <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                                                    <title>PLAY</title>
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="position tracklist-top-align">
                                                            <i className="fa fa-music" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="tracklist-col name">
                                                        <div className="track-name-wrapper tracklist-top-align">
                                                            <div className="tracklist-name ellipsis-one-line" dir="auto">{item.track.name}</div>
                                                            <div className="second-line">
                                                                <span className="TrackListRow__explicit-label">{item.track.explicit ? 'Explicit' : ''}</span>
                                                                <span className="TrackListRow__artists ellipsis-one-line" dir="auto">
                                                                    <span className="react-contextmenu-wrapper">
                                                                        <span draggable="true">
                                                                            <a tabIndex="-1" className="tracklist-row__artist-name-link" href={item.track.artists[0].external_urls.spotify}>{item.track.artists[0].name}</a>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="second-line-separator" aria-label="in album">•</span>
                                                                <span className="TrackListRow__album ellipsis-one-line" dir="auto">
                                                                    <span className="react-contextmenu-wrapper"><span draggable="true">
                                                                        <a tabIndex="-1" className="tracklist-row__album-name-link" href={item.track.album.external_urls.spotify}>{item.track.album.name}</a>
                                                                    </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tracklist-col tracklist-col-duration">
                                                        <div className="tracklist-duration tracklist-top-align">
                                                            <span>{(item.track.duration_ms/60000).toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ol>
                    </section>
                </div>
            );
        } catch (error) {
            console.log(error.message)
        }
        return null;
    }
}

export default AllTracksInfo;