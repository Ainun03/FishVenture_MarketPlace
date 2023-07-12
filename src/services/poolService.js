
import axios from 'axios'

const API_URL = 'http://213.190.4.135:8080/'

const pool = async (poolData) => {
    const response = await axios.post(API_URL + 'create-pool', poolData,{
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
      localStorage.setItem('kolam', JSON.stringify(response.data))
    }
  
    return response.data
  }
const kolamFoto = async (userData) => {
    const response = await axios.post(API_URL + '/upload-pool-photo', userData,
   
    )
  
    if (response.data) {
      localStorage.setItem('kolam', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const poolService = {
    pool,
    kolamFoto,
  }
  
  export default poolService