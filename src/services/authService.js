
import axios from 'axios'

const API_URL = 'http://213.190.4.135:8080/'

const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData,
      {
        headers: {
          accept: "*/*",
          // "Content-Type": "multipart/form-data",
          'Content-Type': 'application/json',
          // "applicationType":"buyer"
        },
        //   body: JSON.stringify({
        //     roles: ["buyer"],
        // }),
      }
    )
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

const login = async (userData,thunkAPI) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    // const data = response.data;
    if (response.data) {
      console.log(userData.applicationType)
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const getUser = async (userData, thunkAPI) => {
    const { token } = thunkAPI.getState().user.user;
    console.log({token})
    const response = await axios.get(API_URL + 'profile', userData,{
      headers: {
        accept: "*/*",
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
      },
    })
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const authService = {
    register,
    login,
    getUser
  }
  
  export default authService