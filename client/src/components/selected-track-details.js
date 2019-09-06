import React, { Component } from 'react';

class SelectedTracksInfo extends Component {
    render() {
        const trackData = this.props.location.state;
        console.log(trackData)
        return (
            <div className="container">
                <div className="row" style={{ background: '#000', textAlign: 'center' }}>
                    <div className="col-md-12 offset-md-4">
                        <a href={trackData.track.album.external_urls.spotify}><img src={trackData.track.album.images[1].url} height={trackData.track.album.images[1].height} width={trackData.track.album.images[1].width} alt={trackData.track.name} /></a>
                        <div><span className="TrackListRow__explicit-label">{trackData.track.explicit ? 'Explicit' : ''}</span></div>
                        <h1>{trackData.track.name}</h1>
                        <div className="trackDetails">
                            <span><i className="fa fa-hdd-o"></i> {trackData.track.disc_number}</span>
                            <span> <i className="fa fa-music" aria-hidden="true"></i> {trackData.track.track_number}</span>
                            <span><i className="fa fa-folder"></i> <a href={trackData.track.album.external_urls.spotify}>{trackData.track.album.name}</a></span>
                            <span><i className="fa fa-user" aria-hidden="true"></i> <a href={trackData.track.artists[0].external_urls.spotify}>{trackData.track.artists[0].name}</a></span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i> {(trackData.track.duration_ms/60000).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedTracksInfo;