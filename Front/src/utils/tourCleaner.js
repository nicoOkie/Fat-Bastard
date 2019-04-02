import { sortBy } from 'lodash';

export const cleanTourDates = (tourDate) => {
  let newDates = tourDate.map(date => (
    {
      id: date.id,
      date: date.custom_fields.date[0],
      city: date.custom_fields.city[0],
      venue: date.custom_fields.venue[0],
      map: date.custom_fields.map[0],
      tickets: date.custom_fields.tickets[0],
    }
  ));

  newDates = sortBy(newDates, ['date']);

  return newDates;
};

export const upCommingShow = (date) => {
  const today = new Date();
  const show = new Date(date);

  return show >= today;
};
