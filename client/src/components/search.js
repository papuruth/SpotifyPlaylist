import React, { Component } from 'react';
import { SpotifyPlaylistAction } from '../redux/spotifyPlayList/spotify-playlist-actions';
import image from '../assets/images/artist_default.jpg'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            type: '',
            searchedData: [],
            token: this.props.location.state.data.token
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        try {
            if (nextProps.location.state.data.query !== prevState.query) {
                return {
                    query: nextProps.location.state.data.query,
                    type: nextProps.location.state.data.type
                }
            }
            if (nextProps.searchedData !== prevState.searchedData) {
                return {
                    searchedData: nextProps.searchedData.albums.items.length ? nextProps.searchedData : []
                }
            }
            return null;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    componentDidMount() {
        const { query, type, token } = this.state;
        const searchQuery = `query=${query}&type=${type}`
        const { dispatch } = this.props;
        dispatch(SpotifyPlaylistAction.Search(searchQuery, token))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.state.data.query !== prevState.query) {
            const { query, token, type } = this.state;
            const searchQuery = `query=${query}&type=${type}`
            const { dispatch } = this.props;
            dispatch(SpotifyPlaylistAction.Search(searchQuery, token))
        }
    }

    trackInfo = (props) => {
        this.props.history.push('trackdetails', props);
    }

    ShowAllTracks = (props) => {
        const { query } = this.state;
        this.props.history.push('tracks', { ...props, query });
    }

    render() {
        const { searchedData } = this.state;
        return (
            <div className="search-result-wrapper" style={{ background: 'rgb(0, 0, 0)' }}>
                <div className="row">
                    <div className="col-sm-5">
                        <h1 className="search-heading-style">Top Result</h1>
                        {
                            Object.keys(searchedData).length > 0 && <div className="top-result-wrapper">
                                <img className="song-image-style" src={searchedData.albums.items[0].images[1].url} alt={searchedData.albums.items[0].name} />
                                <a className="truncate" href={searchedData.tracks.items[0].external_urls.spotify}>{searchedData.albums.items[0].name}</a>
                                {
                                    searchedData.tracks.items[0].artists.map((item) => (
                                        <a href={item.external_urls.spotify} key={item.name}>{item.name}&nbsp;&nbsp;</a>
                                    ))
                                }
                                <button className="songInfo" onClick={() => this.trackInfo(searchedData.tracks.items[0])}>Song</button>
                            </div>
                        }
                    </div>
                    <div className="col-sm-7">
                        <button className="search-heading-style btn btn-link" onClick={() => this.ShowAllTracks(searchedData.tracks)}>Songs</button>
                        {
                            Object.keys(searchedData).length > 0 && searchedData.tracks.items.map((item, index) => {
                                if (index < 3) {
                                    return (
                                        <div className="song-result-wrapper">
                                            <img className="song-image-style" src={item.album.images[1].url} alt={item.name} />
                                            <div className="song-info-box">
                                                <a className="song-name-style" href={item.external_urls.spotify}>{searchedData.albums.items[0].name}</a>
                                                <div className="song-artist">
                                                    {
                                                        searchedData.tracks.items[0].artists.map((item, index) => (
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
                                        </div>
                                    )
                                }
                                return null;
                            })
                        }
                        <button className="see-all btn btn-link" onClick={() => this.ShowAllTracks(searchedData.tracks)}>SEE ALL</button>
                    </div>
                </div>
                {
                    Object.keys(searchedData).length > 0 && searchedData.artists.items.length > 0 && <div className="artist-grid">
                        <section className="arist-grid-wrapper" aria-label="Artists">
                            <div className="arist-grid-head-wrapper">
                                <div className="artist-grid-head-wrapper-1">
                                    <div className="artist-grid-head-wrapper-2">
                                        {
                                            searchedData.artists.items.length > 8 ?
                                                <button className="search-heading-style btn btn-link" onClick={() => this.ShowAllArtists(searchedData.artists)}>Artists</button>
                                                :
                                                <h1 className="search-heading-style">Artists</h1>

                                        }
                                    </div>
                                    {
                                        searchedData.artists.items.length > 3 && <button className="artist-grid-see-all btn btn-link" onClick={() => this.ShowAllArtists(searchedData.tracks.items)}>SEE ALL</button>
                                    }
                                </div>
                                {
                                    Object.keys(searchedData).length > 0 && searchedData.artists.items.map((item, index) => {
                                        if (index < 7) {
                                            return (
                                                <div className="single-artist-grid-wrapper">
                                                    <div draggable="true">
                                                        <div className="react-contextmenu-wrapper">
                                                            <div className="artist-grid-image-wrapper">
                                                                <div className="artist-grid-image-wrapper-1">
                                                                    <img className="artist-image-style" src={item.images.length > 0 ? item.images[1].url : image} alt={item.name} />
                                                                </div>
                                                            </div>
                                                            <div className="artist-grid-info-wrapper">
                                                                <div className="artist-name-wrapper">
                                                                    <span dir="auto">
                                                                        <a className="artist-name-style" href={item.external_urls.spotify}>{item.name}</a>
                                                                    </span>
                                                                </div>
                                                                <div className="artist-type">
                                                                    <span>Artist</span>
                                                                </div>
                                                            </div>
                                                            <div class="artist-info-play-wrapper">
                                                                <button class="artist-info-play-button" aria-label="Play" style={{ '--size': '40px' }}>
                                                                    <svg height="16" role="img" width="16" viewBox="0 0 24 24">
                                                                        <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                                                                    </svg>
                                                                </button>
                                                                <div className="artist-info-play-button-show"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </div>
                        </section>
                    </div>
                }
            </div>
        );
    }
}

export default Search;