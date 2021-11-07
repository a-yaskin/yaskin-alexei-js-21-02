import * as React from 'react';
import Item from '../../components/item/Item';
import { apiResponse } from '../../api-mock/api';
import { ToDoType } from '../../types/responses';

class List extends React.Component<any, any> {
  render() {
    return (
      <div className="list-form">
        {apiResponse.status === 'ok'
          ? apiResponse.result.map((item: ToDoType, index: number) => (
            <Item
              description={item.description}
              key={index}
            />
          ))
          : 'An error occurred when getting data.'}
      </div>
    );
  }
}

export default List;
