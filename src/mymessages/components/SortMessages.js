import React from 'react';
import PropTypes from 'prop-types';

/**
 * A directive (for a table header) which changes the app's sort order
 */
function SortMessages(props) {
  const handleClick = (e) => {
    let { col, sort, onChangeSort } = props;
    let newSort = sort === `+${col}`
        ? `-${col}`
        : `+${col}`;
    onChangeSort(newSort);
  };

  let { col, label, sort } = props, sortClass = '';
  if (sort == `+${col}`) sortClass = 'fa-sort-asc';
  else if (sort == `-${col}`) sortClass = 'fa-sort-desc';
  let chevron = <i style={{ paddingLeft: '0.25em' }} className={'fa ' + sortClass}/>

  return <span onClick={handleClick}>{label} {chevron}</span>;
}

SortMessages.propTypes = {
  label: PropTypes.string,
  col: PropTypes.string,
  sort: PropTypes.string,
  onChangeSort: PropTypes.func
};

export default SortMessages;
