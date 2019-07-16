/* eslint-disable */

import { cleanDates } from '../src/utils/newsCleaner';

// cleanDates() test suite
describe('cleanDates', () => {
  const date = cleanDates('2019-04-05T14:34:10');

  test('Should be a function', () => {
    expect(typeof cleanDates).toBe('function');
  });

  test('Should not work without argument', () => {
    expect(() => {
      cleanDates();
    }).toThrow();
  });

  test('Should return an object', () => {
    expect(typeof date).toBe('object');
  });

  test('Should return an object with 3 properties', () => {
    expect(date).toMatchObject({
      year: expect.any(String),
      month: expect.any(String),
      day: expect.any(String),
    });
  });
});
