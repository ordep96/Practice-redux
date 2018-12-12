import React from 'react';

const Post = (props)=> (
  <article className="post">
    <div className="post__img">
      {
        props.type === "video"
          ? (
            <video src={props.videos.standard_resolution.url} controls></video>
          )
          : (
            <img src={props.images.standard_resolution.url}/>
          )
      }
    </div>
    <button onClick={() => props.addFavorites(props.id)}>Add Favorite</button>
  </article>
);


export default Post;