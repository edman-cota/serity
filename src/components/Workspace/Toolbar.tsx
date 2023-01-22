import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'

import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RootState } from 'src/store'
import { setIsListOpen } from '@features/counter/onToggleListsSlice'
import { useWindowSize } from 'react-use'
import { AiOutlinePlus } from 'react-icons/ai'
import { createNewProject } from '@helpers/createNewProject'
import { Status } from '../../models/definitions'
import { formatUrl, formatUsername } from '@helpers/formatter'

const Toolbar = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)
  const itemColor = useColorModeValue('blackAlpha.600', 'rgb(147, 153, 159)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')

  const username = formatUsername(user?.email)

  const onCreateNewProject = () => {
    const status = createNewProject('', user, '📄​')
    if (status === Status.SUCCESS) {
      navigate(`/${username}/${formatUrl('')}`)
    }
  }

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
        <Button onClick={onCreateNewProject} h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsListOpen(!isListOpen))}>
          {isListOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Toolbar
