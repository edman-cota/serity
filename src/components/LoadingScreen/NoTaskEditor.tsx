import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const NoTaskEditor = () => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <strong>Yey! you don't have any task today</strong>
        </Text>
      </Flex>
    </Flex>
  )
}

export default NoTaskEditor
