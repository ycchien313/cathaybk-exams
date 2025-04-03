/** Can you explain the problem with the following code, and how to fix  it. **/
// class Count extends React.Component { 
//   constructor(props) { 
//     super(props); 
//     this.state = { count: 0 }; 
//     this.handleAddCount = this.handleAddCount.bind(this);
//   }

//   handleAddCount() {
//     this.setState({ count: this.state.count + 1 });
//     this.setState({ count: this.state.count + 1 });
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.handleAddCount}>Add</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Count />, document.getElementById('root'));

/**
  * The code is trying to increment the count state three times in a row using setState.
  * However, setState is asynchronous and does not immediately update the state.
  * As a result, the count will only be incremented by 1 instead of 3.
  * To fix this, we can use the functional form of setState, which takes the previous state as an argument and returns the new state.
  * This way, we can ensure that each increment is based on the most recent state.
  *
  * Here is the corrected code:
  */
import React from 'react';
import ReactDOM from 'react-dom';
class Count extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { count: 0 }; 
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    )
  }
}
ReactDOM.render(<Count />, document.getElementById('root'));