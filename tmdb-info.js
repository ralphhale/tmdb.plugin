export async function getMovieInfoAsync(url) {
    let apiUrl = 'http://www.omdbapi.com?apikey=feaf3386';
    let tmdbMovieName = getMovieName(url);
    let tmdbId = getMovieId(url);

    if (tmdbMovieName && tmdbId) {
        // ex: http://www.omdbapi.com/?t=the+hunt+for+red+october
        let movieUrl = `${apiUrl}&t=${tmdbMovieName}`;

        return fetch(movieUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('received movie data');

            let title = data['Title'];
            let year = data['Year'];

            let tmdbFileName = `${title} (${year}) [tmdbid-${tmdbId}]`;

            let response = {
                title: title,
                year: year,
                id: tmdbId,
                fileName: tmdbFileName
            };

            return response;
        })
        .catch(error => {
           return {
                error: error
           }
        });
    }
}

export function getMovieName(url) {
    // eg: https://www.themoviedb.org/movie/1669-the-hunt-for-red-october
    let urlParts = url.split('/');
    let idAndName = urlParts[urlParts.length-1]; 
    let idAndNameParts = idAndName.split('-');
    let nameParts = idAndNameParts.slice(1); // first part is and ID
    let tmdbName = nameParts.join('+');

    return tmdbName;  
}

export function getMovieId(url) {
    // eg: https://www.themoviedb.org/movie/1669-the-hunt-for-red-october
    let urlParts = url.split('/');
    let idAndName = urlParts[urlParts.length-1]; 
    let idAndNameParts = idAndName.split('-');
    let tmdbId = idAndNameParts[0];

    return tmdbId;  
}
