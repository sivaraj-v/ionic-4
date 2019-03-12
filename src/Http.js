export const getAllPost = () => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    let callPost = await fetch('https://jsonplaceholder.typicode.com/posts/', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    let posts = null;
    switch (callPost.status) {
      case 204:
        dispatch({ type: 'POST_DATA_SUCCESS', postData: [] });
        break;
      case 200:
        posts = await callPost.json();
        dispatch({ type: 'POST_DATA_SUCCESS', postData: posts });
        break;
      default:
        posts = await callPost.json();
        throw dispatch({ type: 'POST_DATA_ERROR', errorInfo: posts.error });
    }
  } catch (error) {
    error = error.message;
    dispatch({ type: 'POST_DATA_ERROR', errorInfo: error });
  }
};
