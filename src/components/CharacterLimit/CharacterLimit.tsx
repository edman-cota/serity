import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface CharacterProps {
  characterCount: number
  maxLength?: number
  warningPoint?: number
}

const CharacterLimit = ({ characterCount, maxLength = 40, warningPoint = 30 }: CharacterProps) => {
  return (
    <Flex justifyContent='flex-end' h='30px'>
      {characterCount >= warningPoint ? (
        <Text color='red.500' fontSize='sm' py='6px'>
          <FormattedMessage id='character_limit' /> {characterCount}/{maxLength}
        </Text>
      ) : null}
    </Flex>
  )
}

export default CharacterLimit
