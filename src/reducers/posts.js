const initialState = {
    posts: [],
    data: [],
    favorites: []
}
  
const Posts = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_POST_INSTAGRAM':
      console.log(action.payload)
      if (state.posts !== undefined ) {
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
    case 'ADD_FAVORITE_POST':
      console.log(action.payload)
      let postFavorites = state.posts.filter(post => post.id === action.payload.id);
      return {
        ...state,
        favorites: state.favorites !== undefined ? state.favorites.concat([], postFavorites) : postFavorites
      }
    break;
    default: 
      return state
  }
}
  
  
export default Posts;