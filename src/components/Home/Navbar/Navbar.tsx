/* eslint-disable no-useless-return */
import { useEffect } from 'react'
import { Button, ButtonGroup, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

import logo from '../../../assets/img/logo.svg'
import { auth } from '../../../firebase'
import { formatUsername } from '../../../helpers/formatter'
import React from 'react'

const Navbar = (): JSX.Element => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  const username = formatUsername(user?.email)

  const navigateTo = () => {
    navigate(`${username}/serity`)
  }

  useEffect(() => {
    if (loading) return
  }, [user, loading])

  return (
    <Flex bg='transparent' zIndex='4'>
      <Flex mx='auto' px='1.5rem' w='100%'>
        <Flex
          justifyContent='space-between'
          h='4rem'
          alignItems='center'
          maxW='80rem'
          mx='auto'
          px='2rem'
          w='100%'
        >
          <Flex>
            <Link as={RouterLink} to='/'>
              <Image src={logo} alt='Serity logo' />
            </Link>
            <Link as={RouterLink} to='/' px={10} _hover={{ textDecor: 'none' }}>
              Serity
            </Link>
          </Flex>
          <Flex>
            <Flex>
              {user ? (
                <Button
                  bg='white'
                  h='2.5rem'
                  w='max-content'
                  color='black !important'
                  _hover={{ bg: 'whiteAlpha.900' }}
                  _active={{ bg: 'whiteAlpha.900' }}
                  onClick={navigateTo}
                >
                  <Text as='span' px='20px'>
                    Go to Workspace
                  </Text>
                </Button>
              ) : (
                <ButtonGroup>
                  <Button
                    bg='whiteAlpha.200'
                    h='2.5rem'
                    w='max-content'
                    color='white !important'
                    onClick={() => navigate('/login')}
                  >
                    <Text as='span' px='20px'>
                      Login
                    </Text>
                  </Button>
                  <Button
                    bg='white'
                    h='2.5rem'
                    w='max-content'
                    color='black !important'
                    _hover={{ bg: 'whiteAlpha.900' }}
                    _active={{ bg: 'whiteAlpha.900' }}
                    onClick={() => navigate('/register')}
                  >
                    <Text as='span' px='20px'>
                      Register
                    </Text>
                  </Button>
                </ButtonGroup>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
