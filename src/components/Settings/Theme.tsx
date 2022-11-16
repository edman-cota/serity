import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const Theme = () => {
  return (
    <VStack h='100%' w='100%' px='30px'>
      <Flex pt='100px' w='100%'>
        <Text fontSize='20px' fontWeight='semibold'>
          <FormattedMessage id='appearance' />
        </Text>
      </Flex>
    </VStack>
  )
}

export default Theme
