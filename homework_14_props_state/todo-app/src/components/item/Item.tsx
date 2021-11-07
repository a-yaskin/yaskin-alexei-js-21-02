import * as React from 'react';

interface Props { // Props interface declaration
  description?: string;
}

interface State {
  completed: boolean;
}

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props); // Must do
    this.handleCompletion = this.handleCompletion.bind(this); // Must to bind this to methods
    this.state = { completed: false };
  }

  handleCompletion() {
    // this.state.completed = !this.state.completed; // It does not work this way! State cannot be changed directly.
    this.setState({
      completed: !this.state.completed, /// TODO: https://youtu.be/MFnojWQg2M4?t=798
    });
  }

  render() {
    return (
      <div className="item">
        <div className="item__description">
          {this.props.description || 'No description'}
        </div>
        <div className="item__completion" onClick={this.handleCompletion}>
          {this.state.completed ? 'Done' : 'Not done'}
        </div>
      </div>
    );
  }
}

export default Item;
