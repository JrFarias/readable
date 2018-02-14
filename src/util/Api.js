
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'test',
  'Content-Type': 'application/json'
}

export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostByCategoryAPI = (category) =>
fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

export const createPostAPI = (post) => {
  const params = {
    method: 'POST',
    body:  JSON.stringify(post) ,
    headers
  };

  return fetch(`${api}/posts`, params)
  .then(res => res.json())
  .then(data => data)
}

export const editPostAPI = (post) => {
  const params = {
    method: 'PUT',
    body:  JSON.stringify(post) ,
    headers
  };

  return fetch(`${api}/posts/${post.id}`, params)
  .then(res => res.json())
  .then(data => data)
}

export const deletePostAPI = (postId) => {
  const params = {
    method: 'DELETE',
    headers
  };

  return fetch(`${api}/posts/${postId}`, params)
  .then(res => res.json())
  .then(data => data)
}

export const getPostAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteAPI = (postId, vote) => {
  const params = {
    method: 'POST',
    body:  JSON.stringify({ option: vote }) ,
    headers
  };

  return fetch(`${api}/posts/${postId}`, params)
  .then(res => res.json())
  .then(data => data)
}


export const getCommentsByPostAPI = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)


export const createCommentAPI = comment => {
  const params = {
    method: 'POST',
    body:  JSON.stringify(comment) ,
    headers
  };

  return fetch(`${api}/comments`, params)
  .then(res => res.json())
  .then(data => data)
}

export const editCommentAPI = comment => {
  const params = {
    method: 'PUT',
    body:  JSON.stringify(comment) ,
    headers
  };

  return fetch(`${api}/comments/${comment.id}`, params)
  .then(res => res.json())
  .then(data => data)
}


export const deleteCommentAPI = comentId => {
  const params = {
    method: 'DELETE',
    headers
  };

  return fetch(`${api}/comments/${comentId}`, params)
  .then(res => res.json())
  .then(data => data)
}


export const voteCommentAPI = (commentId, vote) => {
  const params = {
    method: 'POST',
    body:  JSON.stringify({ option: vote }) ,
    headers
  };

  return fetch(`${api}/comments/${commentId}`, params)
  .then(res => res.json())
  .then(data => data)
}
