import * as React from 'react';
import './ListView.css';
import NewItem from '../../components/new-item/NewItem';
import List from '../../components/list/List';
import TaskCounter from '../../components/task-counter/TaskCounter';
// import { TodoResponse } from '../../types/responses';
import { TodoItem } from '../../types/entities';
// import { apiResponse } from '../../api-mock/api';
import Storage, { StorageType } from '../../storage/Storage';
import StorageService from '../../storage/StorageService';

interface KeyValue {
  [key: string]: number | boolean | undefined;
}

interface Counts extends KeyValue {
  countOfCompleted?: number | boolean;
  totalCount?: number | boolean;
}

interface Props {
}

interface State {
  items: TodoItem[];
  // todoResponse: TodoResponse;
  // currentId: number;
  counts: Counts;
}

class ListView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.storageService = StorageService.init(
      new Storage(StorageType.Local, 'ToDo List 211ab9d6-c2db-459f-8032-97ea8946ed3e'),
    );
    this.state = {
      items: this.storageService.data,
      // todoResponse: apiResponse,
      // currentId: Math.max( // OR: .reduce((a, b) => Math.max(a, b), 0) OR: Math.max.apply(null, numArray)
      //   // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
      //   ...apiResponse.result
      //     .filter((item) => !!item.id || 0)
      //     .map((item) => item.id),
      // ),
      counts: {
        countOfCompleted: this.storageService.data // apiResponse.result
          .filter((item) => !!item.completed)
          .reduce((count) => count + 1, 0),
        totalCount: this.storageService.data // apiResponse.result
          .reduce((count) => count + 1, 0),
      },
    };
  }

  private storageService: StorageService<TodoItem>;

  addItem = (title: string) => {
    // this.setState((prevState) => ({ currentId: prevState.currentId + 1 }), () => { // Using prevState as
    //   // id should be unique
    //   const id = this.state.currentId;
    //   const responseCopy = { ...this.state.todoResponse }; // It makes just a shallow copy (ref. to the original)
    //   // const responseCopy = Object.assign({}, this.state.todoResponse); // ESLint prefers spread operator
    //   // const { todoResponse: responseCopy } = this.state; // Does not make a copy!!!
    //   responseCopy.result = [...responseCopy.result]; // This copies the result array (item objects are refs yet)
    const newItem: TodoItem = {
      id: -1,
      title,
    };
    this.storageService.addItem(newItem);
    // responseCopy.result.push(newItem);
    // // console.log('state result: ', this.state.todoResponse.result,
    // //   '\n copy result: ', responseCopy.result);

    const counts = this.updateCounts({ totalCount: true });
    this.setState({ items: this.storageService.data, counts }); // todoResponse: responseCopy
    // });
  };

  // saveItem = (id: number, completion: boolean) => {
  //   const itemIndex = this.state.todoResponse.result.findIndex((elem) => elem.id === id);
  //   const updatedTodoResponse = this.state.todoResponse;
  //   updatedTodoResponse.result[itemIndex].completed = completion;
  //   this.setState({ todoResponse: updatedTodoResponse });
  // };

  toggleCompletion = (id: number) => {
    const itemIndex = this.state.items // this.state.todoResponse.result
      .findIndex((elem) => elem.id === id);
    // const item = { ...this.state.todoResponse.result[itemIndex] };
    const item = { ...this.state.items[itemIndex] };
    item.completed = !item.completed;
    this.storageService.updateItem(item);

    // const copiedTodoResponse = { ...this.state.todoResponse }; // In such cases can use JSON.parse(JSON.stringify(o))
    // const copiedResult = [...copiedTodoResponse.result]; // instead, this creates a deep copy of obj
    // copiedResult[itemIndex] = item;
    // copiedTodoResponse.result = copiedResult;
    // console.log('state result: ', JSON.stringify(this.state.todoResponse.result),
    //   '\n copy result: ', JSON.stringify(copiedTodoResponse.result));

    const counts = this.updateCounts({ countOfCompleted: item.completed });
    // console.log('[toggle] ============ Counts: ', counts);
    this.setState({ items: this.storageService.data, counts }); // todoResponse: copiedTodoResponse
  };

  deleteItem = (id: number) => {
    const itemIndex = this.state.items // this.state.todoResponse.result
      .findIndex((elem) => elem.id === id);
    // const updatedTodoResponse = { ...this.state.todoResponse };
    // const updatedResult = [...updatedTodoResponse.result];
    // const itemArr = updatedResult.splice(itemIndex, 1);
    // updatedTodoResponse.result = updatedResult;
    // console.log('state result: ', JSON.stringify(this.state.todoResponse.result),
    //   '\n copy result: ', JSON.stringify(updatedTodoResponse.result));
    const item = this.storageService.deleteItem(this.state.items[itemIndex]) || this.state.items[itemIndex]; // f/linter

    // const countOfCompleted = this.state.counts.countOfCompleted + (itemArr[0].completed ? -1 : 0);
    // const totalCount = this.state.counts.totalCount - 1;
    // The above 2 lines are equal to 4 lines below (besides different setState calls for them):
    const counts = this.updateCounts({
      countOfCompleted: item.completed ? false : undefined, // itemArr[0].completed
      totalCount: false,
    });
    this.setState({ items: this.storageService.data, counts });
  };

  // updateCount = (increment: boolean, countObj: any) => {
  //   const delta = increment ? 1 : -1;
  //   const key = Object.keys(countObj)[0];
  //   // const descriptors: any = {};
  //   // descriptors[key] = Object.getOwnPropertyDescriptor(countObj, key);
  //   const counts = countObj; // : any = {};
  //   // Object.defineProperties(counts, descriptors);
  //   counts[key] += delta;
  //   console.log('updateCount: \n    -> key: ', key, '\n    -> counts: ', counts,
  //     '\n    -> literals: ',
  //     { counts, countOfCompleted: this.state.counts.countOfCompleted, totalCount: this.state.counts.totalCount });
  //   return counts;
  // };

  updateCounts = (countIncrements: Counts) => {
    const counts = { ...this.state.counts };
    Object.keys(counts).forEach((key) => {
      const increment = countIncrements[key];
      let count = counts[key];
      if (increment !== undefined && count !== undefined) {
        increment ? (count as number) += 1 : (count as number) -= 1;
      }
      counts[key] = count;
    });
    // console.log('========= updateCounts: \n    -> counts: ', counts, countIncrements,
    //   '\n    -> literals: ',
    //   { counts, countOfCompleted: this.state.counts.countOfCompleted, totalCount: this.state.counts.totalCount });
    return counts;
  };

  // updateTotalCount = (increment: boolean) => {
  //   const delta = increment ? 1 : -1;
  //   this.setState({ totalCount: this.state.totalCount + delta });
  // };

  // incrementCounter() {
  //   this.setState({ countOfCompleted: this.state.countOfCompleted + 1 });
  // }
  //
  // decrementCounter() {
  //   this.setState({ countOfCompleted: this.state.countOfCompleted - 1 });
  // }

  render() {
    return (
      <main>
        <NewItem
          addItem={this.addItem}
        />
        <List
          items={this.state.items} // this.state.todoResponse.result
          // incrementCounter={this.incrementCounter}
          // decrementCounter={this.decrementCounter}
          // saveItem={this.saveItem}
          toggleCompletion={this.toggleCompletion}
          deleteItem={this.deleteItem}
        />
        <TaskCounter
          countOfCompleted={this.state.counts.countOfCompleted as number}
          countOfTotal={this.state.counts.totalCount as number}
        />
      </main>
    );
  }
}

export default ListView;
