import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Spinner } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { LoginHandler } from '../Redux/Action';
  import axios from 'axios';
  import Cookies from 'js-cookie';
  export const Login = () =>  {


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector((store) => store)
    useEffect(() => {
      // if(auth === true) {
      //   navigate("/");
      // } else {
      //   alert("Login Failed! Check email or pass again!")
      // }
      // console.log("auth")
    }, [auth])
    
    
    const handlecheck = () => {
      if(check === false) {
        setCheck(true);
        
      } else {
        setCheck(false);
      }

      
    }
    const baseUrl = `https://zoomxx.herokuapp.com`;
    const handleSignin = () => {
      let data = {
        email : email,
        password : pass,
      }
      signIn(data) 
      // dispatch(LoginHandler([url, data]))
    }

  
  
     

    async function signIn(user) {
      setLoading(true)
  
      await axios.post(`${baseUrl}/signin`, user)
      .then((res) => {
        
        alert("Login successful!")
        setLoading(false)
        if(check === true) {
          localStorage.setItem('token', JSON.stringify(res.data.token))
        }

        Cookies.set('auth', res.data.token) 
        navigate('/')
     })
      .catch(err => {
        alert(err.response.data.status + ", Please provide right credentials")
        setLoading(false)
    })
      
    }
  
    // useEffect(() => {
    //   if(check === true) {
    //       console.log(Cookies.get('auth'));
    //   }
    // }, [check])
  

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e) => setPass(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox onChange={() => handlecheck()}>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'pink.400'}
                  color={'white'}
                  _hover={{
                    bg: 'pink.200',
                  }}
                  onClick={() => handleSignin()}
                  >
                  { loading ? <Spinner size='md' /> : "Sign In"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }