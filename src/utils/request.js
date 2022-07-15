import axios from 'axios'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080' //接口的基准路径 
}) 

export default request