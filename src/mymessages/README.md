## Contents

### The MyMessages submodule states

- *states.js*: Defines the MyMessages ui-router states.

### The MyMessages submodule state components

- *Compose.js*: A component allowing a new message to be composed.
- *Message.js*: A component to show the contents of a message.
- *MessageList.js*: A component to show the list of messages in a folder.
- *MyMessages.js*: A component which renders the mymessages feature.

### Dumb components

- *components/MessageTable.js*: A component that renders the messages table inside `MessageList`.
- *components/SortMessages.js*: A component used in `MessageTable` to toggle the currently sorted column.

### Services

- *messageListUIService.js*: A helper service used in `state.js` to find the nearest messageId in the messages list.