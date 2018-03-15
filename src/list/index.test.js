jest.mock('child_process');

const list = require('./');

describe('list()', () =>
  it('should return a Map of services and their status', async () => {
    const { services } = await list();
    expect(services).toMatchSnapshot();
  }));
