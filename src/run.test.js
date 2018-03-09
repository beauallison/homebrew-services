jest.mock('child_process');

const run = require('./run');

describe('run()', () => {
  it('should run a command', async () => {
    const output = await run(['list']);
    expect(output).toMatchSnapshot();
  });
});
