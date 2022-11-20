import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'

import { RootState } from 'src/store'
import { setIsListOpen } from '@features/counter/onToggleListsSlice'
import CreateProjectModalTrigger from '@components/Modals/CreateProject'
import { useWindowSize } from 'react-use'

const Toolbar = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)
  const itemColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.700')
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
          <FormattedMessage id='projects' />
        </Text>
      </Flex>
      <Flex
        alignItems='center'
        visibility={width < 768 ? 'visible' : 'hidden'}
        _groupHover={{ visibility: 'visible' }}
      >
        <CreateProjectModalTrigger />
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsListOpen(!isListOpen))}>
          {isListOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Toolbar
