
const initialState = {
  posts: []
}

const Posts = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_POST_INSTAGRAM': 
      return {
        posts: action.payload.posts
      }
    break;
    default: 
      return state
  }
}


export default Posts;