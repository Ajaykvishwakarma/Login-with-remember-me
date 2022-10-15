import { ReactNode } from 'react';
import  Logo  from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import "./Style.css";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  function logout(){
    // localStorage.removeItem('token')
    // Cookies.set('auth', undefined) 
    localStorage.clear();
    Cookies.remove('auth')
    alert("Signing out Successfully!")
    navigate('/signup')
  
}


  return (
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id="nav-cont">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <img src={Logo} style={{width: "180px", height: "100%"}}/>
          </Box>

                <Flex alignItems={'center'}>
                  <Stack direction={'row'} spacing={7}>
                    <Button onClick={toggleColorMode}>
                      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                  <Link to="/signin">
                  <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    // color={'white'}
                    // bg={'pink.400'}
                    href={'#'}
                    _hover={{
                      bg: 'pink.300',
                    }}>
                    Sign In
                  </Button>
                </Link>
                <Link to="signup">
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  bg={'pink.400'}
                  href={'#'}
                  _hover={{
                    bg: 'pink.300',
                  }}>
                  Sign Up
                </Button>
                </Link>
              </Stack>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://i.pinimg.com/564x/ca/a1/fb/caa1fb2b76401e84b65d3df0550a2324.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://i.pinimg.com/564x/ca/a1/fb/caa1fb2b76401e84b65d3df0550a2324.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </MenuList> 
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} style={{ height: "68px"}} px={4}></Box>
    </div>
  );
}