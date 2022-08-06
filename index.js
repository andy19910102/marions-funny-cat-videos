const fs = require('fs');
const axios = require("axios");
const moment = require("moment");
const exportCSV = require("./exportCSV");

class Marion {
    // Private property #YOUTUBE_API_KEY
    #YOUTUBE_API_KEY;

    constructor(YOUTUBE_API_KEY) {
        if (!YOUTUBE_API_KEY) {
            throw 'createMarion(YOUTUBE_API_KEY) => Must provide YOUTUBE_API_KEY. ';
        }
        this.#YOUTUBE_API_KEY = YOUTUBE_API_KEY;

        this.getFunnyCatVideos = async (maxResults = 3) => {
            const BASE_URL = "https://www.googleapis.com/youtube/v3";
            const KEYWORDS = "funny cat videos";
            const MAX_RESULTS = maxResults;
            const REQUEST_URL = BASE_URL + `/search?part=snippet&maxResults=${MAX_RESULTS}&q=${KEYWORDS}&key=${this.#YOUTUBE_API_KEY}`;

            return axios.get(REQUEST_URL)
                .then(res => {
                    const videoList = []
                    res.data.items.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoURL = "https://www.youtube.com/watch?v=" + videoId;
                        const { snippet } = item;
                        const { title, description, publishedAt, thumbnails } = snippet;
                        const image = thumbnails.high.url;
                        videoList.push({
                            videoId,
                            videoURL,
                            title,
                            description,
                            publishedAt: moment(publishedAt).format("YYYY.MM.DD"),
                            image
                        });
                    });
                    return videoList
                })
                .catch(err => {
                    console.log(err)
                });
        };

        this.exportFunnyCatVideosCSV = async (fileName = "funny_cat_videos.csv", maxResults = 3) => {
            const videoList = await this.getFunnyCatVideos(maxResults);
            // console.log("videoList", videoList);
            exportCSV(videoList, fileName);
        };

        this.exportFunnyCatVideosJSON = async (fileName = "funny_cat_videos.json", maxResults = 3) => {
            const videoList = await this.getFunnyCatVideos(maxResults);
            // console.log("videoList", videoList);
            let data = JSON.stringify(videoList, null, 2);
            fs.writeFileSync(fileName, data);
            console.log(`\x1b[32m%s\x1b[0m`, `${fileName} has been created successfully.`)
        };

    }
}

function createMarion(YOUTUBE_API_KEY) {
    return new Marion(YOUTUBE_API_KEY);
}

module.exports = createMarion;



