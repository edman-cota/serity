import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

interface PropsInterface {
  to: string
  textId: string
}

const SidebarItem = ({ to, textId }: PropsInterface): JSX.Element => {
  const hover = useColorModeValue('#e9ecef', '#1F2733')
  const backgroundColor = useColorModeValue('#e9ecef', '#1F2733')

  return (
    <Flex
      alignItems='center'
      h='38px'
      w='100%'
      pl='40px'
      cursor='pointer'
      _hover={{ background: hover }}
    >
      <Link to={to}>
        <Text>
          <FormattedMessage id={textId} />
        </Text>
      </Link>
    </Flex>
  )
}
export default SidebarItem
