const { YOUTUBE_API_KEY } = require('./config.json');
const createMarion = require("marions-funny-cat-videos");

// Create the instance of Marion
const marion = createMarion(YOUTUBE_API_KEY);

// Get some funny cat videos
marion.getFunnyCatVideos(3)
    .then(videoList => {
        console.log("videoList", videoList);
    })
    .catch(err => {
        console.log(err);
    });

// Export CSV
marion.exportFunnyCatVideosCSV("funny_cat_videos.csv", 3);

// Export JSON
marion.exportFunnyCatVideosJSON("funny_cat_videos.json", 3);