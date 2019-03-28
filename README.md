# SSR Starter kit

## Structure

```
.
├── build
│   ├── client    // client build files
│   └── server    // client build files
├── src
│   ├── client    // client source code
│   ├── server    // server source code
│   └── shared    // shared source code
├── tsconfig.json
└── webpack.config.js
```

## Installation

```
npm ci
```

## Development

For server

```
npm run dev:server
```

For client

```
npm run dev:client
```

For both

```
npm run dev
```

## Prodution build

For server

```
npm run build:server
```

For client

```
npm run build:client
```

For both

```
npm run build
```

Start application on local

```
npm start
```

## Deployement

Deploy to your Now space

```
npm run deploy
```
