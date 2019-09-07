import axios from 'axios'

export const SpotifyPlaylistService = {
    CountryInfo,
    SpotifyPlaylist,
    AllTracks
}

async function CountryInfo(params) {
    try {
        const data = await axios.get('https://secure.geonames.org/countryCode?'.concat(params));
        try {
            const data_1 = await axios.get(`https://secure.geonames.org/countryInfoJSON?country=${data.data}&username=papuruth`);
            const country = data_1.data.geonames[0].countryCode;
            const locale = data_1.data.geonames[0].languages.split(',')[0];
            return { country, locale };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    catch (error_1) {
        console.log(error_1.message);
    }
}

async function SpotifyPlaylist(token, country, locale) {
    try {
        const data = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists?country=${country}&locale=${locale}&timestamp=${new Date().toISOString()}&limit=10&offset=0`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return data.data;
    }
    catch (error) {
        console.log(error.message);
    }
}

async function AllTracks(token, api) {
    try {
        const data = await axios.get(api, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return data.data;
    }
    catch (error) {
        console.log(error.message);
    }
}