
const initialState = {
  posts: [],
  data: []
}

const Posts = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_POST_INSTAGRAM':
      if (state.posts != undefined ) {
        return {
          posts: state.posts.concat([], action.payload.posts.data),
          data: action.payload.posts
        }
      }
      return {
        posts: action.payload.posts.data,
        data: action.payload.posts
      }
    break;
    default: 
      return state
  }
}


export default Posts;