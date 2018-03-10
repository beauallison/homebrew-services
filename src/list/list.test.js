jest.mock('child_process');

const list = require('./list');

describe('list()', () =>
  it('should return a Map of services and their status', async () => {
    const output = await list();
    expect(output).toMatchSnapshot();
  }));
