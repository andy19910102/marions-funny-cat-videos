const fs = require("fs");
const { Parser } = require("json2csv");

function exportCSV(catVideos, fileName) {
    const fields = ["videoId", "title", "description", "videoURL", "publishedAt", "image"];
    const opts = { fields };
    try {
        const parser = new Parser(opts);
        const csv = parser.parse(catVideos);
        // write CSV to a file
        fs.writeFileSync(fileName, csv);
        console.log(`\x1b[32m%s\x1b[0m`, `${fileName} has been created successfully.`)
    } catch (err) {
        console.error(err);
    }
}

module.exports = exportCSV;