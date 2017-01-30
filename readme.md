# Project
Web client for 'team culture' project.

* [Trello Board](https://trello.com/b/PjIE6AJI/swebly)
* [Jupyter Notebook]()

#### Purpose
* Help visualize the data retrieved from Slack and the ongoing analysis
* Experiment with new front-end tools (storybook, flow, jest)

### Basics
Start local server with browser sync:

    npm start

Run tests:

    npm run test
    npm run test:watch
    npm run coverage

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
