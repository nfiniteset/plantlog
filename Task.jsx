// Task component - represents a single todo item
Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  updateLastWateredOn() {
    Tasks.update(this.props.task._id, {
      $set: {lastWateredOn: Date.now()}
    });
  },

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  render() {
    return (
      <li>
        <button className="water-button" onClick={this.updateLastWateredOn} type="button">
          Water
        </button>

        <span>{this.props.task.name}</span>
        <span>{this.props.task.lastWateredOn}</span>

        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>
      </li>
    );
  }
});
