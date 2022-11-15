import { HStack, LightMode } from '@chakra-ui/react'
import React from 'react'
import RegisterForm from './RegisterForm'

const Register = (): JSX.Element => (
  <LightMode>
    <HStack h='100vh' w='100%' bg='white'>
      <RegisterForm />
    </HStack>
  </LightMode>
)

export default Register
