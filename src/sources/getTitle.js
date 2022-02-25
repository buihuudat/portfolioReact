const getYoutubeTitle = require('get-youtube-title');

const getTitle = (url) => {
  getYoutubeTitle(url, (err, title) => {
    if (err) {
      console.log(err);
      return;
    }
    return title;
  });
}

export default getTitle;