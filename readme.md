# Project


### Basics
Start local server with browser sync:

    npm start

Run tests:

    npm test
    npm test: watch

Check for package updates:

    npm run check

### Production
Build project for production - build/:

    npm run build

Remove build folder:

    npm run clean

### Storybook
Run storybook server:

    npm run storybook

## Electron

Run server with: `npm run start:server`.

Open another terminal to run the app with: `npm run start:app`.

Arguments for both commands:
**--port** (defaults to 3000).

Example: `npm run start:app -- --port 3000` (the extra double hyphen, is not a typo).
