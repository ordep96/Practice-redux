import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { data } from '../data/';
import * as actions from '../actions/';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PostsList from './PostsList';

class App extends Component {

  componentDidMount() {
    this.props.actions.getAsynPostInstagram(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${data.access_token}`);
  }

  render() {
    return(
      this.props.posts !== undefined
        ? <PostsList posts={this.props.posts} />
        : <h2>No hay publicaciones disponibles</h2>
    );
  }
}

const mapStateToProps = (state,props) => {
  console.log(state.posts);
  return {
    posts: state.posts
  }
}

const  mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);