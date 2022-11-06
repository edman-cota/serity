/* eslint-disable no-useless-return */
import { useEffect } from 'react'
import { Button, ButtonGroup, Flex, Image, Link } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

import logo from '../../../assets/img/logo-white.svg'
import { auth } from '../../../firebase'
import { formatUsername } from '../../../helpers/formatter'

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
    <Flex bg='rgb(255 255 255 / 0.15)'>
      <Flex mx='auto' px='1.5rem' w='100%' borderBottom='1px' borderBottomColor='whiteAlpha.300'>
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
            <Link as={RouterLink} to='/' px={10}>
              Serity
            </Link>
          </Flex>
          <Flex>
            <Flex>
              {user ? (
                <Button bg='white' px={10} color='black !important' onClick={navigateTo}>
                  Go to Workspace
                </Button>
              ) : (
                <ButtonGroup>
                  <Button
                    bg='whiteAlpha.200'
                    px={10}
                    color='white !important'
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    bg='white'
                    px={10}
                    color='black !important'
                    onClick={() => navigate('/register')}
                  >
                    Register
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
