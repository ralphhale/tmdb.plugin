(async function(url, option) {

    const tmdb = await import('./tmdb-info.js');

    let response = '';

    switch (option) {
        case 'info':
            response = await tmdb.getMovieInfoAsync(url);
            break;
        
        case 'name':
            response = tmdb.getMovieName(url);
            break;
            
        case 'id':
            response = tmdb.getMovieId(url);
            break;

        default:
            console.error(`unsupported debugging option ${option}`);
            return;
    };

    console.log(response);

})(process.argv[2], process.argv[3]);
