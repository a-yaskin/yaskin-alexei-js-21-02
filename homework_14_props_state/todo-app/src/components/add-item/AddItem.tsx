import * as React from 'react';
import './AddItem.css';

interface Props {
  addItem: (description: string) => void;
}

interface State {
  inputValue: string;
}

class AddItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.inputValue) this.props.addItem(this.state.inputValue);
    this.setState({ inputValue: '' });
    console.log(this.state.inputValue);
  }

  updateInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div className="add-item">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-name">Enter description for a new ToDo item:</label>
          <input
            id="task-name"
            value={this.state.inputValue}
            onChange={(e) => this.updateInputValue(e)}
          />
        </form>
      </div>
    );
  }
}

export default AddItem;
