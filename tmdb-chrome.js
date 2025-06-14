import { getMovieInfoAsync } from './tmdb-info.js';

chrome.tabs.query({ active: true, lastFocusedWindow: true }, async (tabs) => {
    let tmdbFileNameElement = document.querySelector('#tmdbFileName');
    let url = tabs[0].url;

    var response = await getMovieInfoAsync(url);

    if (!response.error) {
        tmdbFileNameElement.innerHTML = response.fileName;
    }
    else {
        tmdbFileNameElement.innerHTML = response.error;
    }
});
