import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/locations`

function create(location) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
    'content-type': 'application/json'},
    body: JSON.stringify(location)
  })
  .then(res => res.json())
}

// function createComment(comment) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
//     'content-type': 'application/json'},
//     body: JSON.stringify(comment)
//   })
//   .then(res => res.json())
// }

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function getLocation(name) {
  //  new Map('MyMap')
  return fetch (`/api/locations/${name}`)
  .then(res => res.json)
}

function update(location) {
  return fetch(`${BASE_URL}/${location._id}`, {
    method: 'PUT',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
    'content-type': 'application/json'},
    body: JSON.stringify(location)
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  getLocation,
  update,
  // createComment,
}