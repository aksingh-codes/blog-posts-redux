import jsonPlaceholder from '../apis/jsonPlaceholder'

// action to fetch posts
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    }) 
  }

// action to fetch user
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({
      type: "FETCH_USER",
      payload: response.data
    }) 
  }
