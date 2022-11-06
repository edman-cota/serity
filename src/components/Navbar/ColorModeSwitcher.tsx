import { Tooltip } from '@serity-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react'

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Tooltip label='Switch Theme'>
      <Button onClick={toggleColorMode}>
        <SwitchIcon />
      </Button>
    </Tooltip>
  )
}

export default ColorModeSwitcher
