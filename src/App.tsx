import React from 'react';

/**
 * class component
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>おはよう</h1>
        <input type='text' onChange={() => console.log('hi')}></input>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </React.Fragment>
    );
  }
}
class Cat extends React.Component {
  render() {
    return <div>meow</div>
  }
}

/** 
 * functional component
 */ 
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>おはよう</h1>
//       <input type='text' onChange={() => console.log('hi')}></input>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </React.Fragment>
//   );
// }

// const Cat = () => {
//   return <div>meow</div>
// }

export default App;
