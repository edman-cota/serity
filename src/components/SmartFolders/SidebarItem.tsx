import React from 'react'
import { useDispatch } from 'react-redux'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink as RouterLink } from 'react-router-dom'
import { Link, Text, useColorModeValue, ListItem, Button } from '@chakra-ui/react'

import { auth } from '../../firebase'
import { formatUrl } from '@helpers/formatter'
import { formatUsername } from '@helpers/formatter'
import { Project } from '../../types/project.model'
import { setIsOpen } from '@features/counter/onToggleSlice'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { setShowAddTask } from '@features/counter/showAddTaskSlice'
import { setWorkingProject } from '@features/counter/workingProjectSlice'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'

interface Props {
  name: string
}

const SidebarItem = ({ name }: Props) => {
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)

  const itemColor = useColorModeValue('#202020', 'hsla(0,0%,100%,.87)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')

  const username = formatUsername(user?.email)

  const navigateTo = (project: Project) => {
    // Guarda localmente
    dispatch(setWorkingProject(project))
    localStorage.setItem('project', project?.name)
    localStorage.setItem('working-project', project?.id)
    // close task detail sidebar
    dispatch(setSelectedTaskId(''))
    dispatch(setActiveIndex(-1))
    dispatch(setShowAddTask(false))
    dispatch(setIsOpen(false))
  }

  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <ListItem color={itemColor} borderRadius='md' _hover={{ bg: hoverBg }} role='group'>
      <Link
        as={RouterLink}
        display='flex'
        alignItems='center'
        pl='10px'
        style={{ textDecoration: 'none' }}
        to={`/`}
        // _activeLink={{ bg: hoverBg, borderRadius: 'md' }}
      >
        <Text as='span' w='30px'>
          |
        </Text>
        <Text w='100%' h='36px' display='flex' alignItems='center' fontSize='15px' px='10px'>
          {name}
        </Text>
        <Text
          color='#777'
          w='2.5rem'
          display='flex'
          justifyContent='center'
          fontSize='12px'
          _groupHover={{ display: 'none' }}
        >
          0
        </Text>
        <Button
          w='2rem'
          display='none'
          minWidth='1.91rem'
          _groupHover={{
            display: 'flex',
          }}
          onClick={handleClick}
        >
          <FiMoreHorizontal />
        </Button>
      </Link>
    </ListItem>
  )
}

export default SidebarItem
