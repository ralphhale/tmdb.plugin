## tmdb.plugin
Chrome plugin to get movie data from TheMovieDB

## create SSH Key
`ssh-keygen -t rsa`
`cat ~/.ssh/id_rsa.pub`

## debugging in VS code
1. In VS Code do Ctrl + Shift + P to open the Command Palett
2. Search for "Debug: Javascript Debug Terminal"
3. Execute debugger command: `node tmdb-debug.js <url> <option>`
   options:
    - info: gets the TMDB info for a file (this is what the chrome extension calls)
    - name: parses the TMDB file name from the URL
    - id: parses the TMDB ID from the URL

   examples:
 - `node tmdb-debug.js "https://www.themoviedb.org/movie/218-the-terminator" "info"`
 - `node tmdb-debug.js "https://www.themoviedb.org/movie/218-the-terminator" "name"`
 - `node tmdb-debug.js "https://www.themoviedb.org/movie/218-the-terminator" "id"`

 note that you can set breakpoints in the code to inspect the running function


 ## installing the plugin
 1. In Chrome, open a new tab and navigate to: [chrome://extensions/](chrome://extensions/)
 2. In the Extensions tab, in the upper left corner, click the button that says "Load unpacked"
 3. Navigate to the folder where this repo is installed (eg. c:\Source\tmdb.plugin) and select the folder

note: after the plugin is installed and you've made file changes, click the 'reload' (curve arrow button) to reload the plugin
 
 ## running the plugin
 1. On a TMDB page, click the plugins icon (looks like a puzzle piece), and select the plugin named 'TMDB File Info Extension' (the TMDB info shows up automatically)
 2. click the pop up to copy the TMDB information

 ## development notes
 - on the Extensions page, you can see "Errors" the plug in has detected
 - sometimes it seems like the plugin doesn't reload properly. in these cases, I find it easer to remove the plugin and reinstall it
