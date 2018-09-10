import axios from 'axios'
// baseURL: 'http://178.128.206.39:9080/api',
export default() => {
  return axios.create({
    baseURL: 'http://localhost:1880/api/v1',
    withCredentials: false,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  })
}
