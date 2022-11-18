import { Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import './theme.scss'
import { FormattedMessage } from 'react-intl'
import { BsCheck2 } from 'react-icons/bs'
import { FaListAlt } from 'react-icons/fa'

const Theme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack h='100%' w='100%' py='60px'>
      <Flex direction='column' w={{ base: '90%', md: '80%' }} mx='auto' maxWidth={880}>
        <Flex w='100%'>
          <Text fontSize='20px' fontWeight='semibold'>
            <FormattedMessage id='appearance' />
          </Text>
        </Flex>
        <Flex w='100%' py='20px'>
          <Text>
            <FormattedMessage id='theme' />
          </Text>
        </Flex>
        <Flex w='100%'>
          <label className='custom-radio' htmlFor='lightTheme' onClick={toggleColorMode}>
            <input type='radio' value='lightTheme' name='radio' checked={colorMode === 'light'} />
            <span className='radio-btn radio-light'>
              <div className='hobbies-icon'>{/* <FaListAlt color='white' /> */}</div>
              <div className='div'>
                <BsCheck2 />
                <p>Light</p>
              </div>
            </span>
          </label>
          <label className='custom-radio' htmlFor='darkTheme' onClick={toggleColorMode}>
            <input type='radio' value='darkTheme' name='radio' checked={colorMode === 'dark'} />
            <span className='radio-btn radio-dark'>
              <div className='hobbies-icon'>{/* <FaListAlt color='black' /> */}</div>
              <div className='div'>
                <BsCheck2 />
                <p>Dark</p>
              </div>
            </span>
          </label>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default Theme
