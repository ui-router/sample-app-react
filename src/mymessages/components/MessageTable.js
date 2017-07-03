import React, {Component, PropTypes} from 'react';
import {UISref, UISrefActive} from '@uirouter/react';

import {orderBy} from '../messageListUIService';

import AppConfig from '../../global/appConfig';
import SortMessages from './SortMessages';
/**
* A component that displays a folder of messages as a table
*
* If a row is clicked, the details of the message is shown using a relative UISref to `.message`.
*
* UISrefActive is used to highlight the selected row.
*
* Shows/hides specific columns based on the `columns` resolved prop.
*/
const tableColumns = [
  { label: '', name: 'read' },
  { label: 'Sender', name: 'from' },
  { label: 'Recipient', name: 'to' },
  { label: 'Subject', name: 'subject' },
  { label: 'Date', name: 'date' },
];

class MessageTable extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(PropTypes.string)
  }
  constructor (props) {
    super(props);
    this.state = { sort: AppConfig.sort }
  }

  colVisible = (name) => this.props.columns.indexOf(name) !== -1;
  changeSort = (sort) => this.setState({sort});
  formattedContent = (message, col) => {
    if (col === 'date') return new Date(message[col]).toISOString().slice(0,10);
    if (col === 'read') return !message[col] ? <i className="fa fa-circle" style={{fontSize: '50%'}} /> : '';
    return message[col];
  }

  render () {
    let {sort} = this.state,
      {messages} = this.props;

    let visibleColumns = tableColumns.filter(column => this.colVisible(column.name));
    let tableHead = visibleColumns.map(column =>
      <td key={column.name}><SortMessages label={column.label} col={column.name} sort={sort} onChangeSort={this.changeSort} /></td>
    );
    let tableBody = messages.sort(orderBy(sort)).map(message =>
      <UISrefActive key={message._id} class="active">
        <UISref to=".message" params={{messageId:message._id}}>
          <tr>{visibleColumns.map(column =>
            <td key={column.name}>{this.formattedContent(message, column.name)}</td>
          )}</tr>
        </UISref>
      </UISrefActive>
    );
    return (
      <table>
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    );
  }
}

export default MessageTable;