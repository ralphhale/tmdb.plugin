chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let apiUrl = 'http://www.omdbapi.com?apikey=feaf3386';
    let tmdbMovieName = getTmdbMovieName(tabs[0].url);
    let tmdbId =  getTmdbId(tabs[0].url);
    let tmdbFileNameElement = document.querySelector('#tmdbFileName');

    if (tmdbMovieName && tmdbId) {
        // ex: http://www.omdbapi.com/?t=the+hunt+for+red+october
        let movieUrl = `${apiUrl}&t=${tmdbMovieName}`;

        fetch(movieUrl)
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

            tmdbFileNameElement.innerHTML = tmdbFileName;
        })
        .catch(error => {
            tmdbFileNameElement.innerHTML = error;
        });
    }
});

function getTmdbMovieName(url) {
    // eg: https://www.themoviedb.org/movie/1669-the-hunt-for-red-october
    let urlParts = url.split('/');
    let idAndName = urlParts[urlParts.length-1]; 
    let idAndNameParts = idAndName.split('-');
    let nameParts = idAndNameParts.slice(1); // first part is and ID
    let tmdbName = nameParts.join('+');

    return tmdbName;  
}

function getTmdbId(url) {
    // eg: https://www.themoviedb.org/movie/1669-the-hunt-for-red-october
    let urlParts = url.split('/');
    let idAndName = urlParts[urlParts.length-1]; 
    let idAndNameParts = idAndName.split('-');
    let tmdbId = idAndNameParts[0];

    return tmdbId;  
}

function copyToClipboard() {
    let tmdbFileNameElement = document.querySelector('#tmdbFileName');
    let tmdbFileName = tmdbFileNameElement.innerHTML;

    navigator.clipboard.writeText(tmdbFileName);
}