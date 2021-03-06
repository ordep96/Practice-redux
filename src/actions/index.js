
export const getPostInstagram = (posts) => {
  return {
    type: 'GET_POST_INSTAGRAM',
    payload: {
      posts
    }
  }
}

export const getAsynPostInstagram = (url) => {
  return (dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(result => {
        dispatch(getPostInstagram(result))
      })
  })
}


export const addFavoritePost = (idPost) => {
  return {
    type: 'ADD_FAVORITE_POST',
    payload: {
      id: idPost
    }
  }
}
