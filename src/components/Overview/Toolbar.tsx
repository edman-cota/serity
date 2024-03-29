import { useNavigate } from 'react-router-dom'
import { Button, useColorModeValue, Heading, shouldForwardProp, chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import React from 'react'

const MotionFlex = chakra(motion.div, {
  /**
   ** Allow motion props and non-chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Toolbar = () => {
  const navigate = useNavigate()
  const cardBackground = useColorModeValue('white', 'gray.700')

  return (
    <MotionFlex
      w={{ base: '95%', sm: '85%', xl: '1010px' }}
      h={{ base: '56px', xl: '80px' }}
      px={{ base: '30px', xl: '30px' }}
      mt='40px'
      borderRadius='lg'
      alignItems='center'
      display='flex'
      justifyContent='space-between'
      bg={cardBackground}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Heading size='md'>
        <FormattedMessage id='overview' />
      </Heading>
      <Button onClick={() => navigate(-1)} bg='whiteAlpha.100'>
        <AiOutlineClose />
      </Button>
    </MotionFlex>
  )
}

export default Toolbar
