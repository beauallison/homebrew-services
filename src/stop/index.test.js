jest.mock('child_process');

const stop = require('./');

describe('stop()', () => {
  it('should stop the service', async () => {
    const { status } = await stop('redis');
    expect(status).toEqual('redis stopped');
  });

  it('should return an error for incorrect service', async () =>
    expect(stop('zookeeper')).rejects.toThrowError(/Failed to stop zookeeper/));
});
