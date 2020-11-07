import React, { Component } from 'react';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import SkateboardBuilder from './containers/SkateboardBuilder/SkateboardBuilder';


class App extends Component {
  render () {
    return (
      <div className={classes.AppLayout}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"></link>
<link href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" rel="javascript" media="screen"></link>
        <Layout>
          <SkateboardBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
