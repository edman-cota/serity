import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, List, ListItem } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../../firebase'
import WorkspaceMenu from '@components/Menus/WorskpaceMenu'
import UserAvatarMenu from '@components/Menus/UserAvatarMenu'
// import ProjectName from './ProjectName'
// import NavItemAddTask from './NavItemAddTask'
// import SettingsMenu from '@components/Menus/SettingsMenu'
// import ProjectOptionsMenu from '../Menus/ProjectOptionsMenu'
// import SortSwitcher from './SortSwitcher'
// import ProjectEmoji from './ProjectEmoji'

const Navbar = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/login')
  }, [user, loading, navigate])

  return (
    <Flex w='100%' mt='20px'>
      <Flex w='95%' mx='auto' maxW='950px' transition='all 2s'>
        <Flex flex='1'>
          <List display='flex' gap={{ base: '10px', md: '20px' }}>
            <ListItem>
              <WorkspaceMenu />
            </ListItem>
          </List>
        </Flex>
        <Flex flex='1' justifyContent='flex-end'>
          <List display='flex' alignItems='center' gap={{ base: '10px', md: '30px' }}>
            {/* <ListItem>
              <NavItemAddTask />
            </ListItem>
            <ListItem>
              <SortSwitcher />
            </ListItem>
            <ListItem>
              <SettingsMenu />
            </ListItem>
            <ListItem>
              <ProjectOptionsMenu />
            </ListItem> */}
            <ListItem>
              <UserAvatarMenu />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default memo(Navbar)
