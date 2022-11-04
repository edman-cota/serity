import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

const ChartTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <Flex pb={5} w='full'>
      <Text color='whiteAlpha.800'>
        <FormattedMessage id={title} />
      </Text>
    </Flex>
  )
}

export default ChartTitle
