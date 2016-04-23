import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';

class Main extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <App />
      </div>
    );
  }
}

render(<App/>, document.getElementById('container'));