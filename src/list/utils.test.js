const fixtures = require('../../fixtures');
const { convertToMap } = require('./utils');

describe('list/convertToMap()', () => {
  it('should convert a list of services to a map', () =>
    expect(convertToMap(fixtures.get('list'))).toMatchSnapshot());

  it('should handle empty results', () =>
    expect(convertToMap('')).toEqual(new Map()));

  it('should handle undefined inputs', () =>
    expect(convertToMap()).toEqual(new Map()));
});
