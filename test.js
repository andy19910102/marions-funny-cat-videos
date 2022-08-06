const { YOUTUBE_API_KEY } = require('./config.json');
const createMarion = require("./index.js")

// Create the instance of Marion
const marion = createMarion(YOUTUBE_API_KEY)
// Get some funny cat videos
// marion.getFunnyCatVideos()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// Export CSV
marion.exportFunnyCatVideosCSV()