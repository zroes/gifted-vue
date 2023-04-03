import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000
})

export const giphyApi = new Axios.create({
  baseURL: 'https://api.giphy.com/v1/',
  timeout: 5000,
  params: {
    api_key: 'hDgLur41wN28VicphiDOK7mMGJZRupaP',
    rating: 'pg',
    limit: 100,
    // maybe change limit
  }
})

