import React from 'react';

const Post = props => (
  <article className="post">
    <div className="post__img">
      <img src={props.images.low_resolution.url} alt=""/>
    </div>
  </article>
);


export default Post;