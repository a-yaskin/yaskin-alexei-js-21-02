import * as React from 'react';
import AddItem from '../../components/add-item/AddItem';
import List from '../../components/list/List';
import TaskCounter from '../../components/task-counter/TaskCounter';
import { ToDoResponse, ToDoType } from '../../types/responses';
import { apiResponse } from '../../api-mock/api';

interface Props {
}

interface State {
  todoResponse: ToDoResponse;
  currentId: number;
  countOfCompleted: number;
  totalCount: number;
}

class ListView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoResponse: apiResponse,
      currentId: Math.max( // OR: .reduce((a, b) => Math.max(a, b), 0) OR: Math.max.apply(null, numArray)
        // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
        ...apiResponse.result
          .filter((item) => !!item.id || 0)
          .map((item) => item.id),
      ),
      countOfCompleted: apiResponse.result
        .filter((item) => !!item.completed)
        .reduce((count) => count + 1, 0),
      totalCount: apiResponse.result
        .reduce((count) => count + 1, 0),
    };
    this.setState = this.setState.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  addItem = (description: string) => {
    this.setState({ currentId: this.state.currentId + 1 }, () => {
      const id = this.state.currentId;
      const { result } = this.state.todoResponse;
      const newItem: ToDoType = {
        id,
        description,
        completed: false,
      };
      result.push(newItem);
      this.state.todoResponse.result = result;
      this.setState({ todoResponse: this.state.todoResponse });
    });
  };

  saveItem = (id: number, completion: boolean) => {
    const itemIndex = this.state.todoResponse.result.findIndex((elem) => elem.id === id);
    const updatedTodoResponse = this.state.todoResponse;
    updatedTodoResponse.result[itemIndex].completed = completion;
    this.setState({ todoResponse: updatedTodoResponse });
  };

  deleteItem = (id: number) => {
    const itemIndex = this.state.todoResponse.result.findIndex((elem) => elem.id === id);
    const updatedTodoResponse = this.state.todoResponse;
    updatedTodoResponse.result.splice(itemIndex, 1);
    this.setState({ todoResponse: updatedTodoResponse });
  };

  incrementCounter() {
    this.setState({ countOfCompleted: this.state.countOfCompleted + 1 });
  }

  decrementCounter() {
    this.setState({ countOfCompleted: this.state.countOfCompleted - 1 });
  }

  render() {
    return (
      <div className="list-view">
        <AddItem
          addItem={this.addItem}
        />
        <List
          items={this.state.todoResponse.result}
          incrementCounter={this.incrementCounter}
          decrementCounter={this.decrementCounter}
          saveItem={this.saveItem}
          deleteItem={this.deleteItem}
        />
        <TaskCounter
          countOfCompleted={this.state.countOfCompleted}
          countOfTotal={this.state.totalCount}
        />
      </div>
    );
  }
}

export default ListView;
