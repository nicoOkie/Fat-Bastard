export const cleanDates = (date) => {
  const newDate = date.slice(0, 10).split('-');
  const cleanDate = {
    year: newDate[0],
    month: newDate[1],
    day: newDate[2],
  };
  return cleanDate;
};

export const freshNews = (news) => {
  const cleanNews = news.map(article => (
    {
      id: article.id,
      date: cleanDates(article.date),
      title: article.title.rendered,
      content: article.content.rendered,
    }
  ));

  return cleanNews;
};

export const onlyThreeNews = news => (
  freshNews(news).slice(0, 3)
);
