/* eslint-disable react/prop-types */
import React from 'react'
import { Flex, Text, Link, LightMode } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  textId: string
  whereTo: string
}

const Footer: React.FC<Props> = (props) => {
  return (
    <LightMode>
      <Flex w='440px' px='25px'>
        <Text color='blackAlpha.800'>
          <FormattedMessage id={props.textId} />
          <Link color='#0071dc' as={RouterLink} to={`/${props.whereTo}`}>
            {' '}
            <FormattedMessage id={props.whereTo} />
          </Link>
        </Text>
      </Flex>
    </LightMode>
  )
}

export default Footer
