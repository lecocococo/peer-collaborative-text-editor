# collaborative text editor

collaborative text editor using CRDT
AND using peer to peer connection

## How to Start

First step,

```
npm install
```

Second step
Go to src/App.js

```
const provider = new WebrtcProvider("test-room", ydoc, {
      signaling: ["wss://y-signaling-server.herokuapp.com/"],
      filterBcConns: false,
    });
```

CHANGE LIKE THIS

```
const provider = new WebrtcProvider("test-room", ydoc, {
      filterBcConns: false,
    });
```

Third step,

```
npm start
```

**PlEASE OPEN IN CHROME or FIREFOX**
Open two browsers or anther tab using URL

It's done!!!

## Demo

Visit: https://y-main.herokuapp.com/
Don't write Personal information because demo only have one room
so, everyon in the demo room can see your information

## Restirct

1. Only one room is available
2. if you run locally, it works only on your computer
3. you can't access with mobile device (Because It's not implemented yet)
