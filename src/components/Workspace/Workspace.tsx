import React, { memo } from 'react'
import { List, VStack, Collapse } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Toolbar from './Toolbar'
import { useGetProjects } from '@hooks/useGetProjects'

import { RootState } from 'src/store'
import TagsToolbar from './TagsToolbar'
import { useGetTaskTags } from '@hooks/useGetTaskTags'
import SidebarItem from '@components/Sidebar/SidebarItem'
import TagSidebarItem from '@components/Sidebar/TagSidebarItem'

const Workspace = () => {
  const { tags } = useGetTaskTags()
  const { projects } = useGetProjects()
  const isTagOpen = useSelector((state: RootState) => state.isTagOpen.value)
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)

  return (
    <VStack w='100%' h='calc(100vh - 160px)'>
      <VStack w='100%'>
        <Toolbar />
        <Collapse in={isListOpen} animateOpacity style={{ width: '100%' }}>
          <List w='90%' mx='auto'>
            {projects?.map((project) => (
              <SidebarItem key={project?.id} project={project} />
            ))}
          </List>
        </Collapse>
        <TagsToolbar />
        <Collapse in={isTagOpen} animateOpacity style={{ width: '100%' }}>
          <List w='90%' mx='auto'>
            {tags?.map((tag) => (
              <TagSidebarItem key={tag?.id} tag={tag} />
            ))}
          </List>
        </Collapse>
      </VStack>
    </VStack>
  )
}

export default memo(Workspace)
