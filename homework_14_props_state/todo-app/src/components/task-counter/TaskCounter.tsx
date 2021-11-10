import * as React from 'react';

interface Props {
  countOfCompleted: number;
  countOfTotal: number;
}

interface State {
}

class TaskCounter extends React.Component<Props, State> {
  render() {
    return (
      <div className="task-counter">
        Number of tasks (Completed / Total):
        <span className="task-count">{ this.props.countOfCompleted || 0 }</span>
        /
        <span className="task-count">{ this.props.countOfTotal || 0 }</span>
      </div>
    );
  }
}

export default TaskCounter;
