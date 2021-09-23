const postsReducer = (state = [], action) => {
    switch (action.type) {
        // THIS IS REDUCER BUT IT IS NOT DOING ANYTHING WITH STATE
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}

export default postsReducer