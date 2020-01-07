import React from 'react';
import PropTypes from 'prop-types';
import { UISref, UISrefActive, UIView, useSrefActive } from '@uirouter/react';

/**
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
function MyMessages(props) {
  function FolderLink({ folder }) {
    // This sref is a relative link to the 'mymessages.messagelist' substate.
    // It provides the 'folderId' parameter value from the current folder's ._id property.
    // When the sref is active, className will be 'selected' which highlights this folder in the list
    const { onClick, href, className } = useSrefActive('.messagelist', { folderId: folder._id }, 'selected');
    return (
        <li className={`folder ${className}`} onClick={onClick}>
          <a href={href}><i className="fa"/>{folder._id}</a>
        </li>
    );
  }

  return (
      <div>
        <div className="my-messages">
          <div className="folderlist">
            <ul className="selectlist list-unstyled">
              {props.folders.map(folder => <FolderLink key={folder._id} folder={folder} />)}
            </ul>
          </div>
          {/* A named view for the list of messages in this folder. This will be filled in by the 'mymessages.messagelist' child state */}
          <UIView name="messagelist" className="messagelist"/>
        </div>
        {/*  A named UIView for a message's contents. The 'mymessages.messagelist.message' grandchild state plugs into this UIView */}
        <UIView name="messagecontent"/>
      </div>
  );
}

MyMessages.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.object)
};

export default MyMessages;
