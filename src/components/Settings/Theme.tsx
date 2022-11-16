import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const Theme = () => {
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
      </Flex>
    </VStack>
  )
}

export default Theme
