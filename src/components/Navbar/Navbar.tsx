import { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, List, ListItem } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import ProjectName from './ProjectName'
import NavItemAddTask from './NavItemAddTask'
import SearchModal from '../Modals/SearchModal'
import ShortcutsModal from '../Modals/ShortcutsModal'
import ProjectOptionsMenu from '../Menus/ProjectOptionsMenu'
import ToggleSidebarVisibility from './ToggleSidebarVisibility'

const Navbar = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/login')
  }, [user, loading, navigate])

  return (
    <Flex w='100%' mt='20px'>
      <Flex w='95%' mx='auto' maxW='950px'>
        <Flex flex='1'>
          <List display='flex' gap='20px'>
            <ListItem>
              <ToggleSidebarVisibility />
            </ListItem>
            <ListItem>
              <ProjectName />
            </ListItem>
          </List>
        </Flex>
        <Flex flex='1' justifyContent='flex-end'>
          <List display='flex' gap='20px'>
            <ListItem>
              <NavItemAddTask />
            </ListItem>
            <ListItem>
              <ShortcutsModal />
            </ListItem>
            <ListItem>
              <SearchModal />
            </ListItem>
            <ListItem>
              <ProjectOptionsMenu name='' id='' emoji='' />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default memo(Navbar)
