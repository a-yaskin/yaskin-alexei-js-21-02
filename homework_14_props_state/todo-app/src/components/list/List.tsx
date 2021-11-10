import * as React from 'react';
import Item from '../item/Item';
import { ToDoType } from '../../types/responses';

interface Props {
  items: Array<ToDoType>;
  saveItem?: (id: number, completion: boolean) => void;
  deleteItem?: (id: number) => void;
  incrementCounter?: () => void;
  decrementCounter?: () => void;
}

interface State {
}

class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.saveItem = this.saveItem.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  saveItem(id: number, completion: boolean) {
    this.props.saveItem && this.props.saveItem(id, completion);
  }

  deleteItem(id: number) {
    this.props.deleteItem && this.props.deleteItem(id);
  }

  incrementCounter() {
    this.props.incrementCounter && this.props.incrementCounter();
  }

  decrementCounter() {
    this.props.decrementCounter && this.props.decrementCounter();
  }

  render() {
    return (
      <div className="list">
        { this.props.items.map((item: ToDoType) => (
          <Item
            id={item.id}
            description={item.description}
            completed={item.completed}
            saveItem={this.saveItem}
            deleteItem={(id) => this.deleteItem(id)}
            // countOfCompleted={this.state.countOfCompleted} // This is again continuation of not so good solution
            // setListState={this.setState} // Using State Bubbling: giving callback to setState to a child
            incrementCounter={this.incrementCounter}
            decrementCounter={this.decrementCounter}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default List;
