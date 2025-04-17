chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let apiUrl = 'http://www.omdbapi.com?apikey=feaf3386';
    let imdbId = getImdbId(tabs[0].url);
    let imdbFileNameElement = document.querySelector('#imdbFileName');

    if (imdbId) {
        let movieUrl = `${apiUrl}&i=${imdbId}`;

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

            let imdbFileName = `${title} (${year}) [imdbid-${imdbId}]`;

            imdbFileNameElement.innerHTML = imdbFileName;
        })
        .catch(error => {
            imdbFileNameElement.innerHTML = error;
        });
    }
});

function getImdbId(url) {
    let parts = url.split('/');
    let ttId = parts[parts.length-2]; // trailing / at the end
    let imdbId = (ttId && ttId.startsWith('tt') ? ttId : '');

    return imdbId;  
}

function copyToClipboard() {
    let imdbFileNameElement = document.querySelector('#imdbFileName');
    let imdbFileName = imdbFileNameElement.innerHTML;

    navigator.clipboard.writeText(imdbFileName);
}