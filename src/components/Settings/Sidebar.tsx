import React from 'react'
import { BsPalette } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { Button, Flex, List, Slide, useColorModeValue } from '@chakra-ui/react'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import SidebarItem from './SidebarItem'
import { useSelector } from 'react-redux'
import { formatUsername } from '@helpers/formatter'

const Sidebar = (): JSX.Element => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const sidebarBackground = useColorModeValue('gray.100', 'gray.700')
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)
  const savedNavHistory = useSelector((state: RootState) => state.saveNavHistory.value)

  const handleNavBack = () => {
    if (savedNavHistory === '') {
      navigate(`/`)
    }
    if (savedNavHistory !== '') {
      navigate(`/${formatUsername(user?.email)}/${savedNavHistory}`)
    }
  }

  return (
    <Flex
      w='300px'
      pos='fixed'
      bg={sidebarBackground}
      h='100vh'
      display={{ base: 'none', md: 'block' }}
    >
      <Flex alignItems='center' px='10px' py='40px'>
        <Button mx='4px' onClick={handleNavBack}>
          <BiArrowBack />
        </Button>
        Back Home
      </Flex>
      <List w='90%' mx='auto'>
        <SidebarItem to='account' textId='account' icon={<AiOutlineUser />} />
        <SidebarItem to='general' textId='general' icon={<AiOutlineSetting />} />
        <SidebarItem to='theme' textId='appearance' icon={<BsPalette />} />
      </List>
    </Flex>
  )
}

export default Sidebar
