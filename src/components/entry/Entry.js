import React from 'react';

class Entry extends React.Component  {
  render() {
    return (
      <div className="Entry">
          <div>Ticker: {this.props.ticker}</div>
          <div>Price: {this.props.price}</div>
      </div>
    );
  }
}

export default Entry;
