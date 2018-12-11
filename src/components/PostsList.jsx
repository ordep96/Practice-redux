import React from 'react';
import Post from './Post';

const PostsList = props => (
  <section className="instagram-posts">
    {
      props.posts.map(post => (
        <Post key={post.id} {...post}/>
      ))
    }
  </section>
);

export default PostsList;