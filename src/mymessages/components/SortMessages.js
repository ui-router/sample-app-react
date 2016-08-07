import React, {Component, PropTypes} from 'react';
/**
 * A directive (for a table header) which changes the app's sort order
 */
class SortMessages extends Component {
  static propTypes = {
    label: PropTypes.string,
    col: PropTypes.string,
    sort: PropTypes.string,
    onChangeSort: PropTypes.func
  }
  handleClick = (e) => {
    let {col, sort, onChangeSort} = this.props;
    let newSort = sort === `+${col}`
      ? `-${col}`
      : `+${col}`;
    onChangeSort(newSort);
  }
  render () {
    let {col, label, sort} = this.props, sortClass = '';
    if (sort == `+${col}`) sortClass = 'fa-sort-asc';
    else if (sort == `-${col}`) sortClass = 'fa-sort-desc';
    let chevron = <i style={{paddingLeft:'0.25em'}} className={'fa '+sortClass} />

    return (
      <span onClick={this.handleClick}>{label} {chevron}</span>
    );
  }
}

export default SortMessages;