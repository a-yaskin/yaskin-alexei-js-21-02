import * as React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


// import PropTypes from 'prop-types';
//
// App.propTypes = {
//   name: PropTypes.string,
//   array: PropTypes.array,
//   arrayType: PropTypes.arrayOf(PropTypes.string), // Typed array <App arrayType={['abc', 'cde']}/>
//   bool: PropTypes.bool,
//   func: PropTypes.func,
//   num: PropTypes.number,
//   obj: PropTypes.object,
//   reactElem: PropTypes.element, // An instance of React element
//   reactClass: PropTypes.elementType, // A class of React element
//   instance: PropTypes.instanceOf(App), // An instance of the class <
//   optionalEnum: PropTypes.oneOf(['one', 'two']), // An option from several ( https://youtu.be/YND405pg89o?t=626 )
//   optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // One of types: <App optionalUnion={'abc'}/>
//   struct: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number
//   })
// }
