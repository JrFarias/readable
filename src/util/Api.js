
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'test'
}

export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

