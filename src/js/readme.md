## Structure

### Directories
- /components
- /constants
- /containers
- /redux
- /utils

#### Components
Use this directory for dumb react components (not connected to redux).
These components will receive data through properties.

#### Constants
Use this directory for files containing constants for use throughout the app.
Theses constants could be:
- Base URL for API
- Text strings
- Date formats

#### Containers
Use this directory for react components connected to redux.
Theses components would usually be the same components specified in the router.

#### Redux
Use this directory for redux related files.
Create types, actions and reducers, in the same file, as specified in the [Ducks-proposal](https://github.com/erikras/ducks-modular-redux).

#### Utils
Use this directory for files containing helper methods.
Examples:
- Local storage handler
- Authentication handler
