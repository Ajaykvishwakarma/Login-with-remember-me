 import React from "react";
 import { useState, useEffect } from "react";
 import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useColorModeValue,
    CloseButton,
    useDisclosure
  } from '@chakra-ui/react';
  import { useNavigate } from "react-router-dom";
  import Cookies from 'js-cookie';
  
  export const Home = () => {

    const navigate = useNavigate();
    // const tokenStr = localStorage.getItem('token')
    // const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')




  


    // console.log(auth1, auth2)
   
  
    useEffect(() => {
        const auth1 =   Cookies.get('auth')
        console.log(auth1)
        const auth2 =  JSON.parse(localStorage.getItem('token'));
    
        if(auth1 !== undefined || auth2 !== null) { 
            
        } else{
            navigate('/signin')

        }
        
    }, [])

    return (
        <div>
        <div>
            {CompExample()}
        </div>
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://i.pinimg.com/564x/ca/a1/fb/caa1fb2b76401e84b65d3df0550a2324.jpg'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Alita
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
      </div>
    );
  }



  function CompExample() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
      <Alert status='success' style={{width: "40%", margin : "auto", marginTop: "10px"}}>
        <Box style={{width: "200px", display: 'flex', margin: "auto"}}>
        {/* <AlertIcon top={3} position='relative'/> */}
        <Box>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
           Welcome To The new world!
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='absolute'
          right={0}
          top={1}
          onClick={onClose}
        />
      </Box>
      </Alert>

    ) : (
    //   <Button style={{ margin : "auto", marginTop: "10px"}} onClick={onOpen}>Show Alert</Button>
    <div></div>
    )
  }