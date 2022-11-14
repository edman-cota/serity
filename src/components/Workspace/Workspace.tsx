import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { List, Text, ListItem, VStack, Collapse } from '@chakra-ui/react'

import '../Sidebar/Sidebar.scss'
import Toolbar from './Toolbar'
import { auth } from '../../firebase'
import { formatUrl } from '@helpers/formatter'
import { formatUsername } from '@helpers/formatter'
import { Project } from '../../types/project.model'
import { useGetProjects } from '@hooks/useGetProjects'
import { setIsOpen } from '@features/counter/onToggleSlice'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { setShowAddTask } from '@features/counter/showAddTaskSlice'
import { setWorkingProject } from '@features/counter/workingProjectSlice'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'
import { RootState } from 'src/store'
import { useGetTaskTags } from '@hooks/useGetTaskTags'
import TagsToolbar from './TagsToolbar'

const Workspace = () => {
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const { tags } = useGetTaskTags()
  const { projects } = useGetProjects()
  const isTagOpen = useSelector((state: RootState) => state.isTagOpen.value)
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)

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

  return (
    <VStack w='100%' h='calc(100vh - 160px)' pt='30px'>
      <VStack alignItems='center' position='relative' w='100%'>
        <Toolbar title='Projects' />
        <Collapse in={isListOpen} animateOpacity style={{ width: '100%' }}>
          <nav>
            <List w='90%' mx='auto'>
              {projects?.map((project) => (
                <ListItem key={project.id} color='hsla(0,0%,100%,.87)'>
                  <NavLink
                    key={project.id}
                    to={`/${username}/${formatUrl(project?.name)}`}
                    className={({ isActive }) => (isActive ? 'i-active' : 'i-link')}
                  >
                    <Text as='span' w='30px'>
                      {project?.emoji}
                    </Text>
                    <Text onClick={() => navigateTo(project)} className='sidebar-item-project'>
                      {project?.name}
                    </Text>
                    <Text color='#777' fontSize='12px' px='10px'>
                      {project?.activeCount >= 1 ? project?.activeCount : null}
                    </Text>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </nav>
        </Collapse>
        <TagsToolbar />
        <Collapse in={isTagOpen} animateOpacity style={{ width: '100%' }}>
          <nav>
            <List w='90%' mx='auto'>
              {tags?.map((tag) => (
                <ListItem key={tag.id} color='hsla(0,0%,100%,.87)'>
                  <NavLink
                    key={tag.id}
                    to={`/${username}/${formatUrl(tag?.label)}`}
                    className={({ isActive }) => (isActive ? 'i-active' : 'i-link')}
                  >
                    <Text w='15px' h='13px' mx='10px' bg={tag?.color} borderRadius='full'></Text>
                    <Text className='sidebar-item-project'>{tag?.label}</Text>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </nav>
        </Collapse>
      </VStack>
    </VStack>
  )
}

export default memo(Workspace)
