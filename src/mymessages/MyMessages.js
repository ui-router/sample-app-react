import React, {Component, PropTypes} from 'react';
import {UIView, UISref, UISrefActive} from '@uirouter/react';

/**
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
class MyMessages extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      folders: PropTypes.arrayOf(PropTypes.object)
    })
  }

  render () {
    let folders = this.props.resolves.folders.map(folder => (
      // Highlight the selected folder:
      // When the current state matches the UISref's state (and its parameters)
      // UISrefActive applies the 'selected' class to the li element
      <UISrefActive key={folder._id} class="selected">
        <li className="folder">
          {/* This UISref is a relative link to the 'mymessages.messagelist' substate. It provides the
            'folderId' parameter value from the current folder's ._id property */}
          <UISref to=".messagelist" params={{folderId:folder._id}}><a><i className="fa"/>{folder._id}</a></UISref>
        </li>
      </UISrefActive>
    ));
    return (
      <div>
        <div className="my-messages">
          <div className="folderlist">
            <ul className="selectlist list-unstyled">
              {folders}
            </ul>
          </div>
          {/* A named view for the list of messages in this folder. This will be filled in by the 'mymessages.messagelist' child state */}
          <UIView name="messagelist" className="messagelist" />
        </div>
        {/*  A named UIView for a message's contents. The 'mymessages.messagelist.message' grandchild state plugs into this UIView */}
        <UIView name="messagecontent" />
      </div>
    );
  }
}

export default MyMessages;