import { Flex, Image, Text } from '@chakra-ui/react'
import Logo from '../../assets/img/logo.svg'

const Header = (): JSX.Element => {
  return (
    <Flex w='100%' h='80px' gap='30px' alignItems='center' justifyContent='center'>
      <Image src={Logo} alt='Logo' boxSize='24px' />
      <Text>S e r i t y</Text>
    </Flex>
  )
}

export default Header
