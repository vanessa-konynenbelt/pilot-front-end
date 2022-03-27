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

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function getLocation(name) {
  console.log("HELLLLOOOOOO", name)
  return fetch (`/api/locations/${name}`)
  .then(res => res.json)
}

export {
  create,
  getAll,
  getLocation,
}