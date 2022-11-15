import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { setIsListOpen } from '@features/counter/onToggleListsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import CreateProjectModalTrigger from '@components/Modals/CreateProject'
import React from 'react'

interface Props {
  title: string
}

const Toolbar = ({ title }: Props) => {
  const dispatch = useDispatch()
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)
  const itemColor = useColorModeValue('rgba(0,0,0,0.56)', 'rgba(255, 255, 255, 0.6)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')

  return (
    <Flex
      justifyContent='space-between'
      w='90%'
      pl='12px'
      py='4px'
      role='group'
      borderRadius='md'
      _hover={{ bg: hoverBg }}
    >
      <Flex alignItems='center'>
        <Text color={itemColor} fontSize='15px' fontWeight='medium'>
          {title}
        </Text>
      </Flex>
      <Flex alignItems='center' visibility='hidden' _groupHover={{ visibility: 'visible' }}>
        <CreateProjectModalTrigger />
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsListOpen(!isListOpen))}>
          {isListOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Toolbar
