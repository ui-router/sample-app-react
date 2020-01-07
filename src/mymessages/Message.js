import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { MessagesStorage } from '../global/dataSources';
import DialogService from '../global/dialogService';
import { useRouter } from "@uirouter/react";

const messageBody = (msg = '') => ({ __html: msg.split(/\n/).map(p => `<p>${p}</p>`).join('\n') });
const prefixSubject = (prefix, message) => prefix + message.subject;
const makeResponseMsg = (prefix, msg) => ({
  from: msg.to,
  to: msg.from,
  subject: prefixSubject(prefix, msg),
  body: quoteMessage(msg)
});
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
function Message(props) {
  const { folder, message, nextMessageGetter } = props;
  const { stateService } = useRouter();

  const actions = useMemo(() => {
    return folder.actions.reduce((obj, action) => {
      obj[ action ] = true;
      return obj;
    }, {});
  }, [folder]);

  /**
   * When the user views a message, mark it as read and save (PUT) the resource.
   */
  useEffect(() => {
    message.read = true;
    MessagesStorage.put(message);
  }, [message]);

  /**
   * Compose a new message as a reply to this one
   */
  const reply = () => {
    let replyMsg = makeResponseMsg("Re: ", message);
    stateService.go('mymessages.compose', { message: replyMsg });
  };

  /**
   * Compose a new message as a forward of this one.
   */
  const forward = () => {
    let fwdMsg = makeResponseMsg("Fwd: ", message);
    delete fwdMsg.to;
    stateService.go('mymessages.compose', { message: fwdMsg });
  };

  /**
   * Continue composing this (draft) message
   */
  const editDraft = () => {
    stateService.go('mymessages.compose', { message: message });
  };

  /**
   * Delete this message.
   *
   * - confirm deletion
   * - delete the message
   * - determine which message should be active
   * - show that message
   */
  const remove = () => {
    let nextMessageId = nextMessageGetter(message._id);
    let nextState = nextMessageId ? 'mymessages.messagelist.message' : 'mymessages.messagelist';
    let params = { messageId: nextMessageId };

    DialogService.confirm("Delete?", undefined)
        .then(() => MessagesStorage.remove(message))
        .then(() => stateService.go(nextState, params, { reload: 'mymessages.messagelist' }));
  };

  const Button = ({ onClick, buttonClassName = "btn-primary", iconClassName, label }) => (
      <button className={`btn ${buttonClassName}`} onClick={onClick}>
        <i className={`fa fa-${iconClassName}`}/>
        <span>{label}</span>
      </button>
  );

  return (
      <div className="message">
        <div className="header">
          <div>
            <h4>{message.subject}</h4>
            <h5>{message.from} <i className="fa fa-long-arrow-right"/> {message.to}</h5>
          </div>
          <div className="line2">
            <div>
              {actions.edit && <Button iconClassName="pencil" label="Edit Draft" onClick={editDraft}/>}
              {actions.reply && <Button iconClassName="reply" label="Reply" onClick={reply}/>}
              {actions.forward && <Button iconClassName="forward" label="Forward" onClick={forward}/>}
              {actions.delete && <Button iconClassName="close" label="Delete" onClick={remove}/>}
            </div>
          </div>
        </div>

        {/* Pass the raw (plain text) message body through the messageBody function to format slightly nicer */}
        <div className="body" dangerouslySetInnerHTML={messageBody(message.body)}></div>
      </div>
  );
}

Message.propTypes = {
  message: PropTypes.object,
  nextMessageGetter: PropTypes.func,
  folder: PropTypes.shape({
    actions: PropTypes.arrayOf(PropTypes.string)
  }),
};

export default Message;
