import * as React from 'react';
import './List.css';
import Item from '../item/Item';
import { TodoItem } from '../../types/entities';

interface Props {
  items: Array<TodoItem>;
  // saveItem?: (id: number, completion: boolean) => void;
  toggleCompletion?: (id: number) => void;
  deleteItem?: (id: number) => void;
  // incrementCounter?: () => void;
  // decrementCounter?: () => void;
}

interface State {
}

class List extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.saveItem = this.saveItem.bind(this);
  //   this.incrementCounter = this.incrementCounter.bind(this);
  //   this.decrementCounter = this.decrementCounter.bind(this);
  // }

  // saveItem(id: number, completion: boolean) {
  //   this.props.saveItem && this.props.saveItem(id, completion);
  // }

  toggleCompletion = (id: number) => {
    this.props.toggleCompletion && this.props.toggleCompletion(id);
  };

  deleteItem = (id: number) => {
    this.props.deleteItem && this.props.deleteItem(id);
  };

  // incrementCounter() {
  //   this.props.incrementCounter && this.props.incrementCounter();
  // }
  //
  // decrementCounter() {
  //   this.props.decrementCounter && this.props.decrementCounter();
  // }

  render() {
    return (
      <ul className="list">
        { this.props.items.map((item: TodoItem) => (
          <Item
            id={item.id}
            title={item.title}
            completed={item.completed}
            // saveItem={this.saveItem}
            toggleCompletion={() => this.toggleCompletion(item.id)}
            deleteItem={() => this.deleteItem(item.id)}
            // countOfCompleted={this.state.countOfCompleted} // This is again continuation of not so good solution
            // setListState={this.setState} // Using State Bubbling: giving callback to setState to a child
            // incrementCounter={this.incrementCounter}
            // decrementCounter={this.decrementCounter}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}

export default List;
