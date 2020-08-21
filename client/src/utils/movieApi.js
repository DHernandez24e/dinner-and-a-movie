require('dotenv').config({path: '../../../.env'});
const fetch = require('node-fetch')

const apiKey = 'caba9b5730mshe2c0c029ded0a4bp1a751djsn17dbaca8cec1'; 

export const apiCall = async () => {

    const moviesSearch = await fetch(`https://unogsng.p.rapidapi.com/search?country_andorunique=US&audiosubtitle_andor=and&limit=99&subtitle=english&countrylist=78&audio=english&offset=0`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'unogsng.p.rapidapi.com',
            'x-rapidapi-key': `${apiKey}`
        }
    });

    const Data = await moviesSearch.json()

    let movies = Data.results

    const randomSelect = Math.floor(Math.random() * movies.length);

    const movie = movies[randomSelect]
    
    return movie;
     //console.log(movie)

};

export default apiCall;