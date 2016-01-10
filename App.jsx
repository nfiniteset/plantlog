App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    };
  },

  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },


  handleSubmit(event) {
   event.preventDefault();

   // Find the text field via the React ref
   var name = React.findDOMNode(this.refs.nameInput).value.trim();

   Tasks.insert({
     name: name,
     createdAt: new Date() // current time
   });

   // Clear form
   ReactDOM.findDOMNode(this.refs.nameInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Planter</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

         <form className="new-task" onSubmit={this.handleSubmit} >
           <input
             type="text"
             ref="nameInput"
             placeholder="Type to add new tasks" />
         </form>
      </div>
    );
  }
});
