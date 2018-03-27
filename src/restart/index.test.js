jest.mock('child_process');

const restart = require('./');

describe('restart()', () => {
  it('should restart the service', async () => {
    const { status } = await restart({ service: 'redis' });
    expect(status).toEqual('restarted');
  });

  it('should return an error for incorrect service', () =>
    expect(restart({ service: 'zookeeper' })).rejects.toThrowError(/Failed to restart zookeeper/));

  it('should return an error for missing input parameters', () =>
    expect(restart()).rejects.toThrowError(/Missing input parameter: service/));
});
