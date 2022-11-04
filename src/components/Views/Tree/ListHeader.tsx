import { Button, Flex, Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { HiOutlineChevronDown } from 'react-icons/hi'

interface Props {
  count: number
}

const ListHeader = ({ count }: Props) => {
  return (
    <Flex width='95%' mx='auto' mt='30px' maxWidth={880}>
      <Button w='20px !important'>
        <HiOutlineChevronDown />
      </Button>
      <Text pl='2px' fontWeight={600} fontSize='18px'>
        <FormattedMessage id='completed' />
        <Text as='span' pl='12px' color='rgba(255, 255, 255, 0.7)'>
          {count}
        </Text>
      </Text>
    </Flex>
  )
}

export default ListHeader
