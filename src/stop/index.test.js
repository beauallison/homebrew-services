jest.mock('child_process');

const stop = require('./');

describe('stop()', () => {
  it('should stop the service', async () => {
    const { status } = await stop({ service: 'redis' });
    expect(status).toEqual('stopped');
  });

  it('should return an error for incorrect service', async () =>
    expect(stop({ service: 'zookeeper' })).rejects.toThrowError(/Failed to stop zookeeper/));
});
