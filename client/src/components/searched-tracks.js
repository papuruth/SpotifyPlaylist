import React, { Component } from 'react';

class SearchedTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTracks: this.props.location.state || []
        }
    }
    render() {
        const { allTracks } = this.state;
        console.log(allTracks)
        return (
            <div className="searched-alltracks">
                <div className="grid-display">
                    <div>
                        <h1 className="searched_tracks_heading">Showing Songs for "{this.props.location.state.query}"</h1>
                        <div className="all-songs-grid">
                            {
                                allTracks && allTracks.items.map((item, index) => {
                                    return (
                                        <div className="single-song-grid-info">
                                            <div draggable="true">
                                                <div className="react-contextmenu-wrapper">
                                                    <div className="grid-image-wrapper">
                                                        <div className="grid-image-wrapper-1">
                                                            <img className="grid-image-style" src={item.album.images[1].url} alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div className="grid-info-wrapper">
                                                        <div className="grid-info-song-wrapper">
                                                            <span dir="auto">
                                                                <a className="grid-info-song-name" title={item.name} href={item.external_urls.spotify}>{item.name}</a>
                                                            </span>
                                                        </div>
                                                        <div className="grid-song-artist">
                                                            {
                                                                item.artists.map((item, index) => (
                                                                    index === 0 ?
                                                                        <span dir="auto" key={item.name}>
                                                                            <a className="song-artist-link" href={item.external_urls.spotify} >{item.name}</a>
                                                                        </span>
                                                                        :
                                                                        <span dir="auto" key={item.name}>
                                                                            {', '}<a className="song-artist-link" href={item.external_urls.spotify}>{item.name}</a>
                                                                        </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <div class="grid-info-play-wrapper">
                                                        <button class="grid-info-play-button" aria-label="Play" style={{'--size':'40px'}}>
                                                            <svg height="16" role="img" width="16" viewBox="0 0 24 24">
                                                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                                                            </svg>
                                                        </button>
                                                        <div className="grid-info-play-button-show"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchedTracks;