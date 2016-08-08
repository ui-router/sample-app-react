## Contents

### Global services

- *appConfig.js*: Stores and retrieves the user's application preferences.
- *authService.js*: Simulates an authentication service.
- *dataSources.js*: Provides REST-like client API for folders, messages, and contacts data.
- *dialogService.js*: Provides a dialog confirmation service.

### Dumb components

- *components/Dialog.js*: A component that renders the dialog used by the `dialogService`.

### Router Hooks

- *requiresAuth.hook.js*: A transition hook which allows a state to declare that it requires an authenticated user.