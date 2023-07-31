import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

let token = null

const getConfig = () => ({
  headers: { Authorization: token }
})

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const destroyToken = () => {
  token = null
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// này như signup?
// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject, getConfig())
  return request.then(response => response.data)
}


export default { getAll, update, setToken, destroyToken }