export const getVideoId = (url) => {
  const match = url.match(/v=([0-9a-z_-]{1,20})/i);
  return (match ? match['1'] : false);
};

export const videoIds = videos => (
  videos.map(video => (
    getVideoId(video)
  ))
);
