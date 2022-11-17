import { List, ListItem, VStack } from '@chakra-ui/react'
import React from 'react'
import SidebarItem from './SidebarItem'

const SmartFolders = () => {
  return (
    <VStack w='100%' my='20px'>
      <List w='90%' mx='auto'>
        <SidebarItem name='All' />
        <SidebarItem name='Today' />
        <SidebarItem name='Inbox' />
      </List>
    </VStack>
  )
}

export default SmartFolders
