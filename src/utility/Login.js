import React from 'react'
import axios from 'axios'

// document.cookie.split("=")[1]}

const Login = () => {

    const date = new Date()
        const expire = new Date(date)
        expire.setDate(expire.getDate() + 5)
        expire.setHours(0, 0, 0, 0)
        

    axios.post('https://api.mediehuset.net/token', {
        username: 'test',
        password: 'test'
      })
      .then(function (response) {
        const token = response.data.access_token
        document.cookie = `Token=${token}; expires=${expire} `
      })
      .catch(function (error) {
        console.log(error);
      });

  return 
}

export default Login
