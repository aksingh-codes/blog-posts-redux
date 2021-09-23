import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// action to fetch posts and users
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // we have to dispatch our fetchposts action without dispatch it is just plain js function
    // also we have to await for it here also as we will be doing stuff with the result
    await dispatch(fetchPosts())

    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(
      userId => dispatch(fetchUser(userId))
    )
    // We dont need to await for response here as we need not use this data here now
}

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
