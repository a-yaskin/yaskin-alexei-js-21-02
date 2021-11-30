import * as React from 'react';
import './NewItem.css';

interface Props {
  addItem: (title: string) => void;
}

interface State {
  inputValue: string;
}

class NewItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = this.state.inputValue.trim();
    if (value) this.props.addItem(value);
    this.setState({ inputValue: '' });
    // console.log(this.state.inputValue);
  };

  updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label htmlFor="task-name">
          What to do?
          <input
            id="task-name"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NewItem;
