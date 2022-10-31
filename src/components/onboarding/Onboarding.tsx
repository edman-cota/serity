import './style.scss'
import { Button, Flex, Heading, Image, VStack, useColorMode } from '@chakra-ui/react'
import Logo from '../../assets/img/logo.svg'
import { Tooltip } from 'serity-ui'

const Onboarding = () => {
  const themes: string[] = ['lightTheme', 'darkTheme']
  const { toggleColorMode } = useColorMode()

  return (
    <VStack style={{ height: '100vh', width: '100%' }}>
      <Flex h="100px" alignItems="center">
        <Image src={Logo} alt="Serity logo" w="10" h="10" />
      </Flex>
      <Flex h="100px">
        <Heading as="h4" size="lg">
          Choose your theme
        </Heading>
      </Flex>
      <Flex className="inputAnswersPanel">
        <input
          className="radio_input"
          type="radio"
          value="lightTheme"
          name="themes"
          checked
          id="lightTheme"
        />
        <label
          className="radio_label"
          for="lightTheme"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#39414b',
            borderColor: '#d0d8e5',
          }}
          onClick={toggleColorMode}
        >
          lightTheme
        </label>

        <input
          className="radio_input"
          type="radio"
          value="darkTheme"
          name="themes"
          id="darkTheme"
        />
        <label
          className="radio_label"
          for="darkTheme"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#39414b',
            borderColor: '#d0d8e5',
          }}
          onClick={toggleColorMode}
        >
          darkTheme
        </label>
      </Flex>
      <Flex justifyContent="flex-start" w="100%">
        <Tooltip label="Tooltip" placement="left">
          <button style={{ backgroundColor: 'red' }}>Hola mundo</button>
        </Tooltip>
        {/* <Button w="380px" bg="#457ae5" color="white">
          Continue
        </Button> */}
      </Flex>
    </VStack>
  )
}

{
  /* <input
        className="radio_input"
        type="radio"
        name="lightTheme"
        id="lightTheme"
      />
      <label
        className="radio_label"
        for="lightTheme"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#39414b",
          borderColor: "#d0d8e5",
        }}
      >
        Light
      </label>

      <input
        className="radio_input"
        type="radio"
        name="darkTheme"
        id="darkTheme"
      />
      <label
        className="radio_label"
        for="darkTheme"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#39414b",
          borderColor: "#d0d8e5",
          // width: inputWidth,
        }}
      >
        Dark
      </label> */
}

export default Onboarding
