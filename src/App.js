import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from './components/UnderstandingBreakpoints';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <UnderstandingBreakpoints />
      </Fragment>
    );
  }
}

export default App;
