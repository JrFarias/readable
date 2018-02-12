
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
