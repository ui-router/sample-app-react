import React, {Component, PropTypes} from 'react';
import DialogService from '../dialogService.js';

class Dialog extends Component {
  constructor (props) {
    super(props);
    DialogService.__registerDialogComponent(this);
    this.state = {
      active: false,
      message: '',
      details: '',
      confirmMsg: '',
      denyMsg: '',
      onConfirm: () => {},
      onDeny: () => {},
      hidden: true
    }
  }
  update = (info, onConfirm, onDeny) => {
    this.setState({ ...info, onConfirm, onDeny, hidden: false });
    setTimeout(() => this.setState({active:true}));
  }
  close = (confirmed) => {
    const { onConfirm, onDeny } = this.state;
    return () => {
      this.setState({ hidden: true, active: false });
      if (confirmed) onConfirm(true);
      else onDeny(false);
    }
  }
  render () {
    let { active, hidden, message, details, confirmMsg, denyMsg, onConfirm, onDeny } = this.state;
    let dialog = (
      <div className={'dialog ' + (active ? 'active' : '')}>
        <div className="backdrop" />
        <div className='wrapper'>
          <div className="content">
            {message ? <h4>{message}</h4> : null}
            {details ? <div>{details}</div> : null}

            <div style={{paddingTop: '1em'}}>
            <button className="btn btn-primary" onClick={this.close(true)}>{confirmMsg}</button>
            <button className="btn btn-primary" onClick={this.close(false)}>{denyMsg}</button>
            </div>
          </div>
        </div>
      </div>
    );
    return hidden ? null : dialog;
  }
}

export default Dialog;