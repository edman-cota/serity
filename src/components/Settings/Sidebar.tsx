import React from 'react'
import { BsPalette } from 'react-icons/bs'
import { Flex, List, useColorModeValue, VStack } from '@chakra-ui/react'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'

import SidebarItem from './SidebarItem'

const Sidebar = (): JSX.Element => {
  const sidebarBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex w='300px' bg={sidebarBackground} h='100vh'>
      <List w='90%' mx='auto' py='100px'>
        <SidebarItem to='account' textId='account' icon={<AiOutlineUser />} />
        <SidebarItem to='general' textId='general' icon={<AiOutlineSetting />} />
        <SidebarItem to='theme' textId='appearance' icon={<BsPalette />} />
      </List>
    </Flex>
  )
}

export default Sidebar
