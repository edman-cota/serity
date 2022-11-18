import React, { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { auth, signInWithGoogle } from '../../firebase'
import { formatUsername } from '../../helpers/formatter'
import { Github } from './GitHub'
import { Google } from './Google'

const SocialLogin = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) {
      const username = formatUsername(user?.email)
      navigate(`/${username}/today/`)
    }
  }, [user, loading, navigate])

  return (
    <Flex w='440px' p='25px'>
      <List w='100%'>
        <ListItem>
          <Button
            px='42px'
            w='100%'
            border='1px'
            justifyContent='flex-start'
            bg='white'
            padding='0 23px'
            height='40px'
            color='rgb(14, 18, 23)'
            borderColor='gray.200'
            borderRadius='12px'
            _hover={{ bg: 'gray.200' }}
            onClick={signInWithGoogle}
          >
            <Google />
            <Text as='span' pl='20px'>
              <FormattedMessage id='continue_with_google' />
            </Text>
          </Button>
          <Button
            mt='10px'
            px='42px'
            w='100%'
            justifyContent='flex-start'
            bg='rgb(45, 49, 58)'
            padding='0 23px'
            height='40px'
            color='rgb(255, 255, 255)'
            borderColor='gray.200'
            borderRadius='12px'
            _hover={{ bg: 'rgb(45, 49, 58)' }}
          >
            <Github />
            <Text as='span' pl='20px'>
              Login with GitHub
            </Text>
          </Button>
        </ListItem>
      </List>
    </Flex>
  )
}

export default SocialLogin
