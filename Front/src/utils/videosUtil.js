export const getVideoId = (url) => {
  const match = url.match(/v=([0-9a-z_-]{1,20})/i);
  return (match ? match['1'] : false);
};

export const videoIds = (videos) => {
  const vidIds = videos.map(video => (
    getVideoId(video)
  ));

  const otherVids = vidIds.splice(1, 5);
  const splitVids = {
    main: vidIds[0],
    vids: otherVids,
  };

  return splitVids;
};
