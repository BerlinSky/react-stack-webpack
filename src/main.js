// import React from 'react';
// import {render} from 'react-dom';
// import App from './components/App.jsx';

// React.render(<App />, document.getElementById('container'));

import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/App.jsx';

// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('container'));