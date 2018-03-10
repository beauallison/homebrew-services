jest.mock('child_process');

const start = require('./');

describe('start()', () => {
  it('should start the service', async () => {
    const { status } = await start('redis');
    expect(status).toEqual('redis started');
  });
});
