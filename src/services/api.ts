import axios from "axios"

// const baseURL = "https://dummyjson.com"
const baseURL = import.meta.env.VITE_BASE_URL

export const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
  formSerializer: {
    indexes: null,
  },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response ? error.response.status : null
    if (status === 401) {
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)
