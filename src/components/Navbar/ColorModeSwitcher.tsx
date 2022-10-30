import React from 'react'
import { Tooltip, useColorMode, useColorModeValue, Button } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Tooltip label="Switch Theme">
      <Button onClick={toggleColorMode}>
        <SwitchIcon />
      </Button>
    </Tooltip>
  )
}

export default ColorModeSwitcher
