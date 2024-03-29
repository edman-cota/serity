import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { Flex, Button } from '@chakra-ui/react'

function Navbar() {
  const navigate = useNavigate()

  return (
    <Flex w='100%' h='60px' justifyContent='flex-end' alignItems='center' px='100px'>
      <Button variant='ghost' onClick={() => navigate(-1)}>
        <GrClose />
      </Button>
    </Flex>
  )
}

export default Navbar
