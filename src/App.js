import React, { Component } from 'react';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import SkateboardBuilder from './containers/SkateboardBuilder/SkateboardBuilder';

class App extends Component {
  render () {
    return (
      <div className={classes.AppLayout}>
        <Layout>
          <SkateboardBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
