# Homebrew Services

Promised based wrapper to control [brew](https://brew.sh/) services on macOS from Node.js

## Requirements

- OSX with Brew installed
- Node.js 7.6+

## Install

```shell
npm install --save homebrew-services
```

## Usage

### List all services

Returns a Map of all services and their status of either _started_ or _stopped_.

```javascript
const brew = require('homebrew-services');

(async () => {
  const { services } = await brew.list();

  console.log(services);
  // Map {
  // 'cassandra' => 'stopped',
  // 'redis' => 'started' }
})();
```

### Start a service

```javascript
const { status } = await brew.start({ service: 'redis' });
console.log(status); // started
```

### Stop a service

```javascript
const { status } = await brew.stop({ service: 'redis' });
console.log(status); // stopped
```
