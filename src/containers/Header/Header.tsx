import { Flex } from '@chakra-ui/react'
import Navbar from '@components/Home/Navbar/Navbar'
import React from 'react'
import '../../index.css'

const Header = (): JSX.Element => {
  return (
    <Flex className='glass-container'>
      <Flex w='100%' mx='auto' position='absolute' direction='column'>
        <Navbar />
        <Flex mt='5rem' h='100%' textAlign='center' flexDir='column' zIndex={100}>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1 }}>
            <span>Simple and clean</span>
            <br />
            to-do list
          </h1>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '2.4rem',
              marginTop: '2rem',
            }}
          ></h2>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
