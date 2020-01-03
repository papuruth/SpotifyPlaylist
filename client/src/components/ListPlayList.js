import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { SpotifyPlaylistAction } from '../redux/spotifyPlayList/spotify-playlist-actions'

class ListPlayList extends Component {
    constructor(props, context) {
        super(props, context);
        const params = this.getHashParams();
        const token = params.access_token ? params.access_token : sessionStorage.getItem('token');
        if (token) {
            sessionStorage.setItem('token', token);
        }
        this.state = {
            playlists: [],
            countryInfo: '',
            token: token,
            message: '',
            count: 0
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return {
                countryInfo: nextProps.countryInfo,
                playlists: nextProps.spotifyPlaylist,
                message: nextProps.message
            }
        }
        return null;
    }

    componentDidMount() {
        try {
            const { dispatch } = this.props;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let lat = position.coords.latitude;
                    let long = position.coords.longitude;
                    const username = 'papuruth'
                    let params = 'lat=' + lat + '&lng=' + long + '&username=' + username;
                    dispatch(SpotifyPlaylistAction.CountryInfo(params))
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    componentDidUpdate(nextProps, prevState) {
        try {
            if (this.state.countryInfo && this.state.playlists.length === 0) {
                const token = this.state.token ? this.state.token : sessionStorage.getItem('token');
                const { country, locale } = this.state.countryInfo
                const { dispatch } = this.props;
                if (this.state.count < 1) {
                    dispatch(SpotifyPlaylistAction.SpotifyPlaylist(token, country, locale))
                    this.setState(state => {
                        return {
                            count: state.count + 1
                        }
                    })
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        this.props.history.push('/');
        return hashParams;
    }


    render() {
        return (
            <div className="container">
                {
                    !this.state.token && <div className="row">
                        <div className="col-sm-12">
                            <a href='http://localhost:3001/login' className="form-control btn1 btn btn-primary" > Login to Spotify </a>
                        </div>
                    </div>
                }
                {
                    this.state.playlists.length !== 0 && <div className="row" style={{ background: '#000' }}>
                        <div className="col-sm-8">
                            <h1 style={{ color: '#fff', textAlign: 'center' }}>{this.state.message}</h1>
                            <div className="playlist">
                                {
                                    this.state.playlists.length !== 0 && this.state.playlists.items.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Link to={
                                                    {
                                                        pathname: '/alltracks',
                                                        state: {
                                                            api: data.href,
                                                            token: this.state.token
                                                        }
                                                    }
                                                }>
                                                    <img src={data.images[0].url} width="150px" height="150px" alt={data.name} />
                                                </Link>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ListPlayList;