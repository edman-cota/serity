import { Button, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { CirclePicker } from 'react-color'

interface Props {
  propsToParent: (e: any) => void
}

const ColorPicker = ({ propsToParent }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [color, setColor] = useState('#f44336')

  const handleOnChange = (color: any, event: any) => {
    setColor(color.hex)
    propsToParent(color.hex)
    onClose()
  }

  return (
    <Menu placement='bottom-start' isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        bg={color}
        minW='25px'
        px='0px !important'
        h='25px'
        _hover={{ bg: color }}
        _active={{ bg: color }}
        onClick={onOpen}
      ></MenuButton>
      <MenuList padding='0' bg='black' border='none' p='20px'>
        <CirclePicker onChange={handleOnChange} />
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
