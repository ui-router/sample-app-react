import React, {Component, PropTypes} from 'react';
import {isEqual} from 'lodash';

import {MessagesStorage} from '../global/dataSources';
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
class Compose extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      $stateParams: PropTypes.shape({
        message: PropTypes.object
      })
    })
  }
  /**
  * Create our message's model using the current user's email address as 'message.from'
  * Then extend it with all the properties from (non-url) state parameter 'message'.
  * Keep two copies: the editable one and the original one.
  * These copies are used to check if the message is dirty.
  */
  constructor(props) {
    super(props);
    this.pristineMessage = { body: '', to: '', subject: '', from: AppConfig.emailAddress, ...this.props.resolves.$stateParams.message };
    this.state = {
      message: { ...this.pristineMessage }
    }
  }
  /**
  * Checks if the edited copy and the pristine copy are identical when the state is changing.
  * If they are not identical, the allows the user to confirm navigating away without saving.
  */
  uiCanExit = () => {
    if (this.canExit || isEqual(this.pristineMessage, this.state.message)) return true;

    var message = 'You have not saved this message.';
    var question = 'Navigate away and lose changes?';
    return DialogService.confirm(message, question, "Yes", "No");
  }
  /**
  * Navigates back to the previous state.
  *
  * - Checks the transition which activated this controller for a 'from state' that isn't the implicit root state.
  * - If there is no previous state (because the user deep-linked in, etc), then go to 'mymessages.messagelist'
  */
  gotoPreviousState = () => {
    let transition = this.props.transition;
    let hasPrevious = !!transition.from().name;
    let state = hasPrevious ? transition.from() : "mymessages.messagelist";
    let params = hasPrevious ? transition.params("from") : {};
    transition.router.stateService.go(state, params);
  };

  /** "Send" the message (save to the 'sent' folder), and then go to the previous state */
  send = () => {
    let message = this.state.message;
    MessagesStorage.save({ ...message, date: new Date(), read: true, folder: 'sent' })
      .then(() => this.canExit = true)
      .then(() => this.gotoPreviousState());
  };

  /** Save the message to the 'drafts' folder, and then go to the previous state */
  save = () => {
    let message = this.state.message;
    MessagesStorage.save({ ...message, date: new Date(), read: true, folder: 'drafts'})
      .then(() => this.canExit = true)
      .then(() => this.gotoPreviousState());
  }

  handleChangeMessage = (detail) => (e) => this.setState({ message: { ...this.state.message, [detail]: e.target.value } });

  render () {
    let message = this.state.message;
    return (
      <div className="compose">
        <div className="header">
          <div className="flex-h"> <label>Recipient</label> <input type="text" id="to" name="to" value={message.to} onChange={this.handleChangeMessage('to')} /> </div>
          <div className="flex-h"> <label>Subject</label> <input type="text" id="subject" name="subject" value={message.subject} onChange={this.handleChangeMessage('subject')} /> </div>
        </div>

        <div className="body">
          <textarea name="body" id="body" value={message.body} cols="30" rows="20" onChange={this.handleChangeMessage('body')} />

          <div className="buttons">
            {/* Clicking this button brings the user back to the state they came from (previous state) */}
            <button className="btn btn-primary" onClick={this.gotoPreviousState}><i className="fa fa-times-circle-o" /><span>Cancel</span></button>
            <button className="btn btn-primary" onClick={this.save}><i className="fa fa-save" /><span>Save as Draft</span></button>
            <button className="btn btn-primary" onClick={this.send}><i className="fa fa-paper-plane-o" /><span>Send</span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Compose;