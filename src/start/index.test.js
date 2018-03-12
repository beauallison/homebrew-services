jest.mock('child_process');

const start = require('./');

describe('start()', () => {
  it('should start the service', async () => {
    const { status } = await start({ service: 'redis' });
    expect(status).toEqual('started');
  });

  it('should return status for already started service', async () => {
    const { status } = await start({ service: 'kafka' });
    expect(status).toEqual('already started');
  });

  it('should return an error for incorrect service', async () =>
    expect(start({ service: 'zookeeper' })).rejects.toThrowError(/Failed to start zookeeper/));
});
