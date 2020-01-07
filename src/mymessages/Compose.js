import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { useTransitionHook } from "@uirouter/react";

import { MessagesStorage } from '../global/dataSources';
import AppConfig from '../global/appConfig';
import DialogService from '../global/dialogService';

/**
 * This component composes a message
 *
 * The message might be new, a saved draft, or a reply/forward.
 * A Cancel button discards the new message and returns to the previous state.
 * A Save As Draft button saves the message to the "drafts" folder.
 * A Send button sends the message
 */
function Compose(props) {
  const pristineMessage = useMemo(() => {
    return ({ body: '', to: '', subject: '', from: AppConfig.emailAddress, ...props.$stateParams.message });
  }, []);

  const [message, setMessage] = useState(pristineMessage);
  const [canExit, setCanExit] = useState(false);

  /**
   * Checks if the edited copy and the pristine copy are identical when the state is changing.
   * If they are not identical, the allows the user to confirm navigating away without saving.
   */
  const uiCanExit = () => {
    if (canExit || isEqual(pristineMessage, message)) return true;

    var message = 'You have not saved this message.';
    var question = 'Navigate away and lose changes?';
    return DialogService.confirm(message, question, "Yes", "No");
  };

  useTransitionHook('onBefore', { exiting: '**.mymessages.compose' }, uiCanExit);

  /**
   * Navigates back to the previous state.
   *
   * - Checks the transition which activated this controller for a 'from state' that isn't the implicit root state.
   * - If there is no previous state (because the user deep-linked in, etc), then go to 'mymessages.messagelist'
   */
  const gotoPreviousState = () => {
    let transition = props.transition;
    let hasPrevious = !!transition.from().name;
    let state = hasPrevious ? transition.from() : "mymessages.messagelist";
    let params = hasPrevious ? transition.params("from") : {};
    transition.router.stateService.go(state, params);
  };

  /** "Send" the message (save to the 'sent' folder), and then go to the previous state */
  const send = () => {
    MessagesStorage.save({ ...message, date: new Date(), read: true, folder: 'sent' })
        .then(() => setCanExit(true))
        .then(() => gotoPreviousState());
  };

  /** Save the message to the 'drafts' folder, and then go to the previous state */
  const save = () => {
    MessagesStorage.save({ ...message, date: new Date(), read: true, folder: 'drafts' })
        .then(() => setCanExit(true))
        .then(() => gotoPreviousState());
  }

  const handleChangeMessage = (field) => {
    return (e) => setMessage({ ...message, [ field ]: e.target.value });
  };

  return (
      <div className="compose">
        <div className="header">
          <div className="flex-h"><
              label>Recipient</label>
            <input type="text" id="to" name="to" value={message.to} onChange={handleChangeMessage('to')}/>
          </div>
          <div className="flex-h">
            <label>Subject</label>
            <input type="text" id="subject" name="subject" value={message.subject}
                   onChange={handleChangeMessage('subject')}/>
          </div>
        </div>

        <div className="body">
          <textarea name="body" id="body" value={message.body} cols="30" rows="20"
                    onChange={handleChangeMessage('body')}/>

          <div className="buttons">
            {/* Clicking this button brings the user back to the state they came from (previous state) */}
            <button className="btn btn-primary" onClick={gotoPreviousState}>
              <i className="fa fa-times-circle-o"/>
              <span>Cancel</span>
            </button>
            <button className="btn btn-primary" onClick={save}>
              <i className="fa fa-save"/>
              <span>Save as Draft</span>
            </button>
            <button className="btn btn-primary" onClick={send}>
              <i className="fa fa-paper-plane-o"/>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
  );
}

Compose.propTypes = {
  $stateParams: PropTypes.shape({
    message: PropTypes.object
  }),
};

export default Compose;
