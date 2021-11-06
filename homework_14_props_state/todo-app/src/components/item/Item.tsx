import * as React from 'react';

interface Props { // Props interface declaration
  description: string;
}

class Item extends React.Component<Props> {
  render() {
    return (
      <div className="item">
        <div className="item__desctiption">{this.props.description || 'No description'}</div>
        <div className="item__completed">{}</div>
      </div>
    );
  }
}

export default Item;
