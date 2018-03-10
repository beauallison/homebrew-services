jest.mock('child_process');

const start = require('./');

describe('start()', () => {
  it('should start the service', async () => {
    const { status } = await start('redis');
    expect(status).toEqual('redis started');
  });

  it('should return status for already started service', async () => {
    const { status } = await start('kafka');
    expect(status).toEqual('kafka already started');
  });

  it('should return an error for incorrect service', async () => {
    const error = new Error({
      status: 'Failed to start Zookeeper',
      error: 'Error starting Zookeeper',
    });

    await expect(start('zookeeper')).rejects.toMatchObject(error);
  });
});
