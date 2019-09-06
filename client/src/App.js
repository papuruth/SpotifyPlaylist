import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import routes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {
            routes.map((route, index) => (
              <Route key={index} {...route} />
            ))
          }
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;