import * as React from 'react';
import Item from '../../components/item/Item';

class List extends React.Component<any, any> {
  render() {
    return (
      <div className="list-form">
        <Item
          description="ToDo Item"
        />
      </div>
    );
  }
}

export default List;
