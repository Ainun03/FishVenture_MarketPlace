
import axios from 'axios'

const API_URL = 'http://213.190.4.135:8080/'

const jenisIkan = async (dataIkan,token) => {
    // const {token} = thunkAPI.getState().user.user.data;
    console.log(token)
    const response = await axios.post(API_URL + 'create-fish-species', dataIkan,
    {
      headers: {
        accept: "*/*",
        Authorization: "Bearer " + token,
        // "Content-Type": "multipart/form-data",
        'Content-Type': 'application/json',
        // "applicationType":"buyer"
      },
    }
   
    )
  
    if (response.data) {
      localStorage.setItem('kolam', JSON.stringify(response.data))
    }
  
    return response.data
  }
  const poolService = {
    jenisIkan,
  }
  
  export default poolService