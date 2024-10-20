import io from 'socket.io-client'

// const baseURL =  'http://185.241.61.68/api'
const baseURL = process.env.REACT_APP_API_SOCKET_ENDPOINT

const socket = io(baseURL)
const userData = JSON.parse(localStorage.getItem('userData'))
socket.auth = {token: userData?.token, market: userData?.market}

export default socket
