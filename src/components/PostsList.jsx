import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { data } from '../data/';
import * as actions from '../actions/';

import Post from './Post';

class PostList extends Component {
  
  componentDidMount() {
    this.props.actions.getAsynPostInstagram(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${data.access_token}`);
  }

  getMorePost = (url) => {
    this.props.actions.getAsynPostInstagram(url);
  }
  
  addFavorites = (idPost) => {
    this.props.actions.addFavoritePost(idPost);
  }
  
  render() {
    return(
      <section className="instagram-posts">
        {
        this.props.posts !== undefined
        ? (
            <div>
              {
                this.props.posts.map(post => (
                  <Post 
                    key={post.id}
                    addFavorites={this.addFavorites} 
                    {...post}
                  />
                ))
              }
              <button onClick={() => this.getMorePost(this.props.data.pagination.next_url)}>See more</button>
            </div>
        )
        : <h2>No hay publicaciones disponibles</h2>
          
        }
      </section>
    )
  }

}

const mapStateToProps = (state,props) => {
  console.log(state)
  return {
    posts: state.posts.posts,
    data: state.posts.data
  }
}

const  mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);