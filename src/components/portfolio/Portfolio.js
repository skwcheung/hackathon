import React from 'react';
import Entry from '../entry/Entry'

const tempList = [
    {
        ticker: 'XSP',
        price: 36
    },
    {
        ticker: 'ZQQ',
        price: 68
    },
    {
        ticker:'kimmy',
        price: 420
    }
  ];

const List = ({ list }) => (
    <ul>
      {list.map(item => (
        <Entry ticker={item.ticker} price={item.price} />
      ))}
    </ul>
);
class Portfolio extends React.Component {
    render() {
      return(
          <List list={tempList}></List>
      );
    }
}

export default Portfolio;