import React, {Component, PropTypes} from 'react';

import {MessagesStorage} from '../global/dataSources';
import DialogService from '../global/dialogService';

const messageBody = (msg = '') => ({ __html: msg.split(/\n/).map(p => `<p>${p}</p>`).join('\n') });
const prefixSubject = (prefix, message) => prefix + message.subject;
const makeResponseMsg = (prefix, msg) => ({ from: msg.to, to: msg.from, subject: prefixSubject(prefix, msg), body: quoteMessage(msg)});
const quoteMessage = message => `



---------------------------------------
Original message:
From: ${message.from}
Date: ${message.date}
Subject: ${message.subject}

${message.body}`;

/**
* This component renders a single message
*
* Buttons perform actions related to the message.
* Buttons are shown/hidden based on the folder's context.
* For instance, a "draft" message can be edited, but can't be replied to.
*/
class Message extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      message: PropTypes.object,
      nextMessageGetter: PropTypes.func,
      folder: PropTypes.shape({
        actions: PropTypes.arrayOf(PropTypes.string)
      })
    })
  }

  constructor (props) {
    super(props);
    // Apply the available actions for the message, depending on the folder the message belongs to.
    this.actions = props.resolves.folder.actions.reduce((obj, action) => { obj[action] = true; return obj; }, {});
    this.stateService = this.props.transition.router.stateService;
  }
  /**
  * When the user views a message, mark it as read and save (PUT) the resource.
  */
  componentWillReceiveProps (props) {
    let message = props.resolves.message;
    message.read = true;
    MessagesStorage.put(message);
  }
  /**
  * Compose a new message as a reply to this one
  */
  reply = () => {
    let {message} = this.props.resolves;
    let replyMsg = makeResponseMsg("Re: ", message);
    this.stateService.go('mymessages.compose', { message: replyMsg });
  };

  /**
  * Compose a new message as a forward of this one.
  */
  forward = () => {
    let {message} = this.props.resolves;
    let fwdMsg = makeResponseMsg("Fwd: ", message);
    delete fwdMsg.to;
    this.stateService.go('mymessages.compose', { message: fwdMsg });
  };

  /**
  * Continue composing this (draft) message
  */
  editDraft = () => {
    let {message} = this.props.resolves;
    this.stateService.go('mymessages.compose', { message: message });
  };

  /**
  * Delete this message.
  *
  * - confirm deletion
  * - delete the message
  * - determine which message should be active
  * - show that message
  */
  remove = () => {
    let {message} = this.props.resolves;
    let nextMessageId = this.props.resolves.nextMessageGetter(message._id);
    let nextState = nextMessageId ? 'mymessages.messagelist.message' : 'mymessages.messagelist';
    let params = { messageId: nextMessageId };

    DialogService.confirm("Delete?", undefined)
      .then(() => MessagesStorage.remove(message))
      .then(() => this.stateService.go(nextState, params, { reload: 'mymessages.messagelist' }));
  };
  render () {
    let { folder, message, nextMessageGetter } = this.props.resolves;
    return (
      <div className="message">
        <div className="header">
          <div>
            <h4>{message.subject}</h4>
            <h5>{message.from} <i className="fa fa-long-arrow-right" /> {message.to}</h5>
          </div>
          <div className="line2">
            {/*<div>{{$ctrl.message.date | date: 'longDate'}} {{$ctrl.message.date | date: 'mediumTime'}}</div>*/}
            <div>
              {this.actions.edit ? <button className="btn btn-primary" onClick={this.editDraft}><i className="fa fa-pencil" /> <span>Edit Draft</span></button> : null}
              {this.actions.reply ? <button className="btn btn-primary" onClick={this.reply}><i className="fa fa-reply" /> <span>Reply</span></button> : null}
              {this.actions.forward ? <button className="btn btn-primary" onClick={this.forward}><i className="fa fa-forward" /> <span>Forward</span></button> : null}
              {this.actions.delete ? <button className="btn btn-primary" onClick={this.remove}><i className="fa fa-close" /> <span>Delete</span></button> : null}
            </div>
          </div>
        </div>
        {/* Pass the raw (plain text) message body through the messageBody function to format slightly nicer */}
        <div className="body" dangerouslySetInnerHTML={messageBody(message.body)}></div>
      </div>
    );
  }
}

export default Message;