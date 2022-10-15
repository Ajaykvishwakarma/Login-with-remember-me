import { AUTH, LOADING } from './ActionType';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const axios = require("axios");

export const setAuth = (payload) => ({type: AUTH, payload })
export const setLoading = (payload) => ({ type: LOADING, payload})

export const SignupHandler = (details) => async (dispatch) => {
 
    dispatch(setLoading(true))
    dispatch(setAuth(false))
    const a = await fetch(details[0], {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(details[1]) 
      
    })
    .then((response) => response.json())
    .then((data) => {
    //   console.log('Success:', data);
      if(data.status === "success") {
        alert("Please Login Now!")
          dispatch(setAuth(true))
      } else {
        alert("Please Check your creds again!")
      }
      dispatch(setLoading(false))
    })
    .catch((error) => {
    //   console.error('Error:', error);
      alert("Server Error");
      dispatch(setLoading(false))

    });
    
  
}

export const LoginHandler = (details) => async (dispatch) => {
 
  dispatch(setLoading(true))
  dispatch(setAuth(false))
  const a = await fetch(details[0], {
      method : "POST",
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(details[1]) 
    
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    if(data.status === "success") {
      alert("Login Success!")
      localStorage.setItem('token', JSON.stringify(data.token))
    } else {
      alert("Please Check your creds again!")
    }
    dispatch(setLoading(false))
  })
  .catch((error) => {
  //   console.error('Error:', error);
    alert("Server Error");
    dispatch(setLoading(false))

  });
  

}
// async function signUp(user) {
//     const a = await axios.post(``, user)
//     const response = a.data;
//     if(response.status === 'success') {

//     }else{
//       alert('Please Provide Unique credential')
//     }
//     alert('please signin now')
    

// }

async function signUp(user) {
    // console.log(user)
    // const a = await axios.post(user[0], user[1])
    // const response = a.data;
    // console.log(response)
    // if(response.status === 'success') {

    // }else{
    //   alert('Please Provide Unique credential')
    // }
    // alert('please signin now')
    
  }