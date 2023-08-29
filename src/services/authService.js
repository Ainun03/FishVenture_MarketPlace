
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
    // const resJson=await response.json()
  
    if (response.data.data) {
      localStorage.setItem('user', JSON.stringify(response.data.data))
    }
  
    return response.data.data
  }

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    // const data = response.data;
    if (response.data.data) {
      console.log(userData.applicationType)
      localStorage.setItem('user', JSON.stringify(response.data.data))
    }
  
    return response.data.data
  }



  const authService = {
    register,
    login,
  }
  
  export default authService