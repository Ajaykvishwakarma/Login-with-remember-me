import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react';
  import { Spinner } from '@chakra-ui/react'
  import {Link } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { SignupHandler } from '../Redux/Action';
  
  const axios = require("axios");
  export const Register = () =>  {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, auth } = useSelector((store) => store)
    useEffect(() => {
      if(auth === true) {
        navigate("/signin");
      } 
    }, [auth])
    
    

    const baseUrl = `https://zoomxx.herokuapp.com`;
    const handleSignin = () => {
      let url = `${baseUrl}/signup`;
      let data = {
        email : email,
        password : pass,
        firstName : firstName,
        lastName : lastName 
      }
      dispatch(SignupHandler([url, data]))
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')} >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10} style={{width: "100%"}}>
            <Stack spacing={4} >
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" onChange={(e) => setLastName(e.target.value)}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPass(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
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
                  { loading ? <Spinner size='md' /> : "Sign up"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?<Link to="/signin" color={'blue'} style={{color: "#3583c5", padding: "10px"}} >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }