import * as React from 'react';
import './Item.css';
// import { RefObject } from 'react';

interface Props { // Props interface declaration
  id: number;
  title?: string;
  completed?: boolean;
  // saveItem?: (id: number, completion: boolean) => void;
  toggleCompletion?: () => void;
  deleteItem?: () => void;
  // countOfCompleted: number; // This is not a good idea to provide access to the whole state,
  // setListState: Function; // and to add mess in this component with excessive data (countOfCompleted) from parent.
  // incrementCounter?: () => void; // This is a better solution on the above task
  // decrementCounter?: () => void;
}

interface State {
  completed?: boolean;
}

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props); // Must do passing props to parent
    // this.handleCompletion = this.handleCompletion.bind(this); // Must to bind this to methods
    this.state = { completed: this.props.completed };
    // this.textDiv = React.createRef(); // Ref creation
  }

  handleCompletion = () => { // handleCompletion(e: any) {
    // eslint-disable-next-line
    // console.log(e); // Getting Synthetic Event object
    // alert(this.textDiv.current?.innerText); // Getting content of ref

    // !this.state.completed
    //   // ? this.props.setListState({ //This is again implementation of the same not good architectural approach above
    //   //   countOfCompleted: this.props.countOfCompleted + 1,
    //   // })
    //   // : this.props.setListState({
    //   //   countOfCompleted: this.props.countOfCompleted - 1,
    //   ? this.props.incrementCounter && this.props.incrementCounter()
    //   : this.props.decrementCounter && this.props.decrementCounter();

    // this.state.completed = !this.state.completed; // It does not work this way! State cannot be changed directly.
    // this.setState({ // Should not be called in the render(), otherwise 'Maximum update depth exceeded'
    //   completed: !this.state.completed, // Changed only the part that is set; state can have more properties
    // // }, () => this.props.saveItem && this.props.saveItem(this.props.id, this.state.completed || false));
    // }, () => this.props.toggleCompletion && this.props.toggleCompletion(this.props.id));
    this.props.toggleCompletion && this.props.toggleCompletion();
    this.setState((prevState) => ({ completed: !prevState.completed }));
  };

  handleDeletion = () => {
    this.props.deleteItem && this.props.deleteItem();
  };

  // textDiv: RefObject<HTMLDivElement>;

  render() {
    return (
      <li className={`item ${this.props.completed && 'item_completed'}`}>
        <div
          // ref={this.textDiv /* ref assignment */}
          className="item__title"
        >
          <label htmlFor={`item-${this.props.id.toString()}`}>
            <input
              type="checkbox"
              className="checkbox"
              id={`item-${this.props.id.toString()}`}
              checked={this.state.completed ? this.state.completed : false}
              onChange={this.handleCompletion}
            />
            {this.props.title || 'No description'}
          </label>
        </div>
        <div className="item__completion" onClick={this.handleCompletion}>
          {this.props.completed ? 'Done' : 'Not done'}
        </div>
        <button type="button" className="item__deletion" onClick={this.handleDeletion}>
          Delete
        </button>
      </li>
    );
  }
}

export default Item;
