import { List, ListItem, VStack } from '@chakra-ui/react'
import React from 'react'
import SidebarItem from './SidebarItem'
import { HiOutlineInbox } from 'react-icons/hi'
import { IoTodayOutline } from 'react-icons/io5'
import { ImStack } from 'react-icons/im'

const SmartFolders = () => {
  return (
    <VStack w='100%' my='20px'>
      <List w='90%' mx='auto'>
        <SidebarItem name='All' to='all' icon={<ImStack />} />
        <SidebarItem name='Today' to='today' icon={<IoTodayOutline />} />
        <SidebarItem name='Inbox' to='inbox' icon={<HiOutlineInbox />} />
      </List>
    </VStack>
  )
}

export default SmartFolders
