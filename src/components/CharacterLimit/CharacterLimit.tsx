import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface CharacterProps {
  characterCount: number
  maxLength?: number
  warningPoint?: number
  touched: boolean
  hadInteraction: boolean
}

const CharacterLimit = ({
  characterCount,
  maxLength = 40,
  warningPoint = 30,
  touched,
  hadInteraction,
}: CharacterProps) => {
  return (
    <Flex justifyContent='flex-end' h='30px'>
      {characterCount >= warningPoint && characterCount !== 0 ? (
        <Text color='red.500' fontSize='sm' py='6px'>
          <FormattedMessage id='character_limit' /> {characterCount}/{maxLength}
        </Text>
      ) : null}
      {characterCount === 0 && touched && hadInteraction === false ? (
        <Text color='red.500' fontSize='sm' py='6px'>
          <FormattedMessage id='cant_be_blank' />
        </Text>
      ) : null}
      {hadInteraction && characterCount <= 0 ? (
        <Text color='red.500' fontSize='sm' py='6px'>
          <FormattedMessage id='cant_be_blank' />
        </Text>
      ) : null}
    </Flex>
  )
}

export default CharacterLimit
