import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSrefActive } from '@uirouter/react';

import { orderBy } from '../messageListUIService';

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

function MessageTable(props) {
  const [sort, setSort] = useState(AppConfig.sort);
  const { messages } = props;

  const colVisible = (name) => props.columns.indexOf(name) !== -1;
  const formattedContent = (message, col) => {
    if (col === 'date') return new Date(message[ col ]).toISOString().slice(0, 10);
    if (col === 'read') return !message[ col ] ? <i className="fa fa-circle" style={{ fontSize: '50%' }}/> : '';
    return message[ col ];
  };

  let visibleColumns = tableColumns.filter(column => colVisible(column.name));
  let tableHead = visibleColumns.map(column =>
      <td key={column.name}>
        <SortMessages label={column.label} col={column.name} sort={sort} onChangeSort={setSort}/>
      </td>
  );
  let tableBody = messages.sort(orderBy(sort)).map(message => {
    const sref = useSrefActive('.message', { messageId: message._id }, 'active');
    return (
        <tr {...sref} key={message._id}>
          {visibleColumns.map(column => <td key={column.name}>{formattedContent(message, column.name)}</td>)}
        </tr>
    )
  });

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

MessageTable.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string)
};

export default MessageTable;
