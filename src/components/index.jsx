import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import PostList from './PostsList';
import Favorites from './Favorites';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favoritos</Link>
          </div>
          <Switch>
            <Route exact path="/" component={PostList}/>
            <Route path="/favorites" component={Favorites}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;