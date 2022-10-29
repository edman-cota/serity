import { Flex, Text, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/logo.svg"

const Header = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Flex
      direction="column"
      w="100%"
      mb="70px"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={Logo}
        alt="Logo"
        boxSize="40px"
        cursor="pointer"
        onClick={() => navigate("/")}
      />
      <Text
        fontSize="20px"
        px="16px"
        mt="10px"
        cursor="pointer"
        color="black"
        onClick={() => navigate("/")}
      >
        S e r i t y
      </Text>
    </Flex>
  )
}

export default Header
