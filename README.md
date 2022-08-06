# Marions Funny Cat Videos

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

Marion's Tech Tips:

Did you know the internet has CAT VIDEOS? Lots of them!

<img src="https://i.imgur.com/VsDbL0L.jpg" width="250px" alt="gene-takovic-sports-talk">

## Installation

```shell
$ npm install marions-funny-cat-videos
```

## Create Marion object

```javascript
const createMarion = require("marions-funny-cat-videos")

// Create the instance of Marion
const marion = createMarion("YOUR_YOUTUBE_API_KEY");
```

### getFunnyCatVideos(maxResults = 3)

return a Promise object with an array of funny cat videos.

```javascript
// Get some funny cat videos
marion.getFunnyCatVideos(25)
    .then(videoList => {
        console.log(videoList);
    })
    .catch(err => {
        console.log(err);
    });
```

And you will get those funny cat videos array.

```javascript
[
  {
    videoId: 'eX2qFMC8cFo',
    videoURL: 'https://www.youtube.com/watch?v=eX2qFMC8cFo',
    title: 'Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2020.10.29',
    image: 'https://i.ytimg.com/vi/eX2qFMC8cFo/hqdefault.jpg'
  },
  {
    videoId: 'LMHsp0Vue68',
    videoURL: 'https://www.youtube.com/watch?v=LMHsp0Vue68',
    title: 'Funniest Cats 😹- Best Of The 2022 Funny Cat Videos 😂 - Funny Cats HD',
    description: 'Funniest Cats - Best Of The 2022 Funny Cat Videos - Funny Cats HD Welcome to the funniest cat channel. Funny cat videos ...',
    publishedAt: '2022.08.04',
    image: 'https://i.ytimg.com/vi/LMHsp0Vue68/hqdefault.jpg'
  },
  {
    videoId: 'y8qQFMvfHk8',
    videoURL: 'https://www.youtube.com/watch?v=y8qQFMvfHk8',
    title: 'FUNNY CAT MEMES COMPILATION OF 2022 PART 41',
    description: 'Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...',
    publishedAt: '2022.08.05',
    image: 'https://i.ytimg.com/vi/y8qQFMvfHk8/hqdefault.jpg'
  },
  {
    videoId: 'vY6OzvQtzsk',
    videoURL: 'https://www.youtube.com/watch?v=vY6OzvQtzsk',
    title: 'Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2021.05.06',
    image: 'https://i.ytimg.com/vi/vY6OzvQtzsk/hqdefault.jpg'
  },
  {
    videoId: '317jz-PU7Mg',
    videoURL: 'https://www.youtube.com/watch?v=317jz-PU7Mg',
    title: 'Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2020.09.14',
    image: 'https://i.ytimg.com/vi/317jz-PU7Mg/hqdefault.jpg'
  },
  {
    videoId: 'f5dNdXe8kDc',
    videoURL: 'https://www.youtube.com/watch?v=f5dNdXe8kDc',
    title: 'Funniest Cats 😹- Best Of The 2022 Funny Cat Videos 😂 - Funny Cats HD',
    description: 'Funniest Cats - Best Of The 2022 Funny Cat Videos - Funny Cats HD Welcome to the funniest cat channel. Funny cat videos ...',
    publishedAt: '2022.08.03',
    image: 'https://i.ytimg.com/vi/f5dNdXe8kDc/hqdefault.jpg'
  },
  {
    videoId: '0xqkksHov58',
    videoURL: 'https://www.youtube.com/watch?v=0xqkksHov58',
    title: 'The Funniest Cat Videos on the Internet 🤣🐱',
    description: "Hope you enjoy these funny cat videos. I'm very passionate about cats, especially funny cats and this channel is dedicated to ...",
    publishedAt: '2021.10.03',
    image: 'https://i.ytimg.com/vi/0xqkksHov58/hqdefault.jpg'
  },
  {
    videoId: 'CPISexQPvQw',
    videoURL: 'https://www.youtube.com/watch?v=CPISexQPvQw',
    title: 'Try Not To Laugh Animals | Funniest Cat Videos In The World | Funny Animal Videos #128',
    description: 'Try Not To Laugh Animals | Funniest Cat Videos In The World | Funny Animal Videos #128, Funny Dogs, Cute Pets, Funniest ...',
    publishedAt: '2022.06.25',
    image: 'https://i.ytimg.com/vi/CPISexQPvQw/hqdefault.jpg'
  },
  {
    videoId: 'sabrCngYywk',
    videoURL: 'https://www.youtube.com/watch?v=sabrCngYywk',
    title: 'Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2021.07.08',
    image: 'https://i.ytimg.com/vi/sabrCngYywk/hqdefault.jpg'
  },
  {
    videoId: '1auRIgrYX2M',
    videoURL: 'https://www.youtube.com/watch?v=1auRIgrYX2M',
    title: '1 Hour of Funniest Cat Videos In The World | Try Not To Laugh Funny Animal Videos #125',
    description: '1 Hour of Funniest Cat Videos In The World | Try Not To Laugh Funny Animal Videos #125, Funny Dogs, Cute Pets, Funniest ...',
    publishedAt: '2022.06.19',
    image: 'https://i.ytimg.com/vi/1auRIgrYX2M/hqdefault.jpg'
  },
  {
    videoId: 'NjQd8Js9w-s',
    videoURL: 'https://www.youtube.com/watch?v=NjQd8Js9w-s',
    title: 'FUNNY CAT MEMES COMPILATION OF 2022 PART 40',
    description: 'Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...',
    publishedAt: '2022.08.02',
    image: 'https://i.ytimg.com/vi/NjQd8Js9w-s/hqdefault.jpg'
  },
  {
    videoId: 'HJFbhG1Z_c0',
    videoURL: 'https://www.youtube.com/watch?v=HJFbhG1Z_c0',
    title: '1 Hour of Funniest Cat Videos on the Planet #3 - Best Funny Animal Videos 2022',
    description: '1 Hour of Funniest Cat Videos on the Planet - Best Funny Animals Videos 2022 | Funny Cats And Dogs Videos - Try Not To Laugh ...',
    publishedAt: '2022.04.22',
    image: 'https://i.ytimg.com/vi/HJFbhG1Z_c0/hqdefault.jpg'
  },
  {
    videoId: 'r1Ac7A09LAc',
    videoURL: 'https://www.youtube.com/watch?v=r1Ac7A09LAc',
    title: '1 HOUR FUNNY CATS COMPILATION 2022 😂| The Best Funny Cat Videos!😸 😸',
    description: '1 HOUR FUNNY CATS COMPILATION 2022 | The Best Funny Cat Videos!   Welcome to the funniest cat channel. Funny cat ...',
    publishedAt: '2022.07.30',
    image: 'https://i.ytimg.com/vi/r1Ac7A09LAc/hqdefault.jpg'
  },
  {
    videoId: 'DO3rsOBBGCg',
    videoURL: 'https://www.youtube.com/watch?v=DO3rsOBBGCg',
    title: '🤣HOLDING YOUR LAUGH while watching these video😹 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2022.07.22',
    image: 'https://i.ytimg.com/vi/DO3rsOBBGCg/hqdefault.jpg'
  },
  {
    videoId: '01VdUdbP_8I',
    videoURL: 'https://www.youtube.com/watch?v=01VdUdbP_8I',
    title: '🤣Funniest Cats Ever - I CHALLENGE You to watch this video without LAUGHING😂 - 99% Impossible',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2022.07.15',
    image: 'https://i.ytimg.com/vi/01VdUdbP_8I/hqdefault.jpg'
  },
  {
    videoId: 'asXt2XR1RYA',
    videoURL: 'https://www.youtube.com/watch?v=asXt2XR1RYA',
    title: '😂YOU LAUGH YOU LOSE! 😹Funny Moments Of Cats Videos Compilation - Funny Cat Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2022.07.29',
    image: 'https://i.ytimg.com/vi/asXt2XR1RYA/hqdefault.jpg'
  },
  {
    videoId: '8skqvImlF_c',
    videoURL: 'https://www.youtube.com/watch?v=8skqvImlF_c',
    title: 'Funny Animal Videos 2022 😂 - Funniest Cats And Dogs Videos 😺😍 #14',
    description: "Welcome to Funny Animals Club! We've selected the best of the funniest and cutest Cats   & Dogs   videos that will make you ...",
    publishedAt: '2022.07.24',
    image: 'https://i.ytimg.com/vi/8skqvImlF_c/hqdefault.jpg'
  },
  {
    videoId: 'eFLBSue8CQE',
    videoURL: 'https://www.youtube.com/watch?v=eFLBSue8CQE',
    title: '🤣LAUGH TO FAINT😹CATs will make you LAUGH all day😹 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2022.08.05',
    image: 'https://i.ytimg.com/vi/eFLBSue8CQE/hqdefault.jpg'
  },
  {
    videoId: 'MKSaPNU0p0g',
    videoURL: 'https://www.youtube.com/watch?v=MKSaPNU0p0g',
    title: 'Funny Animal Videos 2022 😂 - Funniest Cats And Dogs Videos 😺😍 #15',
    description: "Welcome to Funny Animals Club! We've selected the best of the funniest and cutest Cats   & Dogs   videos that will make you ...",
    publishedAt: '2022.07.31',
    image: 'https://i.ytimg.com/vi/MKSaPNU0p0g/hqdefault.jpg'
  },
  {
    videoId: '8AkiS9g7jCY',
    videoURL: 'https://www.youtube.com/watch?v=8AkiS9g7jCY',
    title: '1 Hour of Funniest Cat Videos on the Planet #8 - Best Funny Animal Videos 2022',
    description: '1 Hour of Funniest Cat Videos on the Planet - Best Funny Animals Videos 2022 | Funny Cats And Dogs Videos - Try Not To Laugh ...',
    publishedAt: '2022.06.20',
    image: 'https://i.ytimg.com/vi/8AkiS9g7jCY/hqdefault.jpg'
  },
  {
    videoId: 'ABeLa68M4gk',
    videoURL: 'https://www.youtube.com/watch?v=ABeLa68M4gk',
    title: 'Funny Animal Videos 2022 😂 - Best Dogs And Cats Videos 😺😍 #15',
    description: "Welcome to Funny Animals Club! We've selected the best of the funniest and cutest Cats   & Dogs   videos that will make you ...",
    publishedAt: '2022.08.05',
    image: 'https://i.ytimg.com/vi/ABeLa68M4gk/hqdefault.jpg'
  },
  {
    videoId: '1kr4w0iMp4E',
    videoURL: 'https://www.youtube.com/watch?v=1kr4w0iMp4E',
    title: 'Funniest Animals Videos - Best Cute Cats😹 and Crazy Dogs🐶 Videos 2022!',
    description: "Welcome to Funny Animals Club! We've selected the best of the funniest and cutest Cats   & Dogs   videos that will make you ...",
    publishedAt: '2022.03.05',
    image: 'https://i.ytimg.com/vi/1kr4w0iMp4E/hqdefault.jpg'
  },
  {
    videoId: 'uohjEN-TSuU',
    videoURL: 'https://www.youtube.com/watch?v=uohjEN-TSuU',
    title: '1 HOUR FUNNY CATS COMPILATION 2022 😂| The Best Funny Cat Videos!😸 😸',
    description: '1 HOUR FUNNY CATS COMPILATION 2022 | The Best Funny Cat Videos!   Welcome to the funniest cat channel. Funny cat ...',
    publishedAt: '2022.08.03',
    image: 'https://i.ytimg.com/vi/uohjEN-TSuU/hqdefault.jpg'
  },
  {
    videoId: 'ByH9LuSILxU',
    videoURL: 'https://www.youtube.com/watch?v=ByH9LuSILxU',
    title: 'Baby Cats - Cute and Funny Cat Videos Compilation #34 | Aww Animals',
    description: 'Baby cats are amazing creature because they are the cutest and most funny. Watching funny baby cats is the hardest try not to ...',
    publishedAt: '2020.06.19',
    image: 'https://i.ytimg.com/vi/ByH9LuSILxU/hqdefault.jpg'
  },
  {
    videoId: 'O50L97av6AE',
    videoURL: 'https://www.youtube.com/watch?v=O50L97av6AE',
    title: '😇 Laugh non-stop with these funny cats 😹 - Funniest Cats Expression Video 😇 - Funny Cats Life',
    description: "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
    publishedAt: '2022.06.17',
    image: 'https://i.ytimg.com/vi/O50L97av6AE/hqdefault.jpg'
  }
]
```

### exportFunnyCatVideosCSV(fileName = "funny_cat_videos.csv", maxResults = 3)

Export funny cat videos data into a CSV file.

```javascript
// Export CSV
marion.exportFunnyCatVideosCSV("funny_cat_videos.csv", 100);
```

### exportFunnyCatVideosJSON(fileName = "funny_cat_videos.json", maxResults = 3)

Export funny cat videos data into a JSON file.

```javascript
// Export JSON
marion.exportFunnyCatVideosJSON("funny_cat_videos.json", 3);
```