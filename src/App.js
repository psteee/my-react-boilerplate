import React from 'react';

import { hot } from 'react-hot-loader';

//const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {
  /*state = {
    count: 0
  };*/

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
