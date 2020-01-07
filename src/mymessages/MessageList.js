import React from 'react';
import PropTypes from 'prop-types';

import MessageTable from './components/MessageTable';

/**
 * This component renders a list of messages using the `MessageTable` component
 */
function MessageList(props) {
  let { folder, messages } = props;
  return (
      <div className="messagelist">
        <div className="messages">
          <MessageTable columns={folder.columns} messages={messages}/>
        </div>
      </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  folder: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.string)
  }),
};

export default MessageList;
