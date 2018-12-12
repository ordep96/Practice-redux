import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { data } from '../data/';
import * as actions from '../actions/';
import PostsList from './PostsList';

class App extends Component {

  componentDidMount() {
    this.props.actions.getAsynPostInstagram(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${data.access_token}`);
  }

  getMorePost = (url) => {
    this.props.actions.getAsynPostInstagram(url);
  }

  render() {
    return(
      this.props.posts !== undefined
        ? (
            <div>
              <PostsList posts={this.props.posts} />
              <button onClick={() => this.getMorePost(this.props.data.pagination.next_url)}>See more</button>
            </div>
        )
        : <h2>No hay publicaciones disponibles</h2>
    );
  }
}

const mapStateToProps = (state,props) => {
  console.log(state.posts);
  return {
    posts: state.posts,
    data: state.data
  }
}

const  mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);