import React, { Component } from 'react';
import './app.css';
import ProductsList from './components/productslist/productslist'
import Home from './components/home/home'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  
  render() {
    
    return (
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <Router>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/products" component={ProductsList}></Route>
              </Switch>
            </Router>
          </div>
        </div>        
      </div>
    );
  }
}
export default App;