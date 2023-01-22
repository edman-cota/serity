import React from 'react'
import { Button, Flex, List, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from '@components/Sidebar/Sidebar'
import PanelContent from '@components/Settings/PanelContent'
import SidebarItem from '@components/Sidebar/SidebarItem'
import { createNewProject } from '@helpers/createNewProject'
import { auth } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Status } from '../../../models/definitions'

import { formatUrl, formatUsername } from '@helpers/formatter'
import { useGetProjects } from '@hooks/useGetProjects'

const Workspace = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const { projects } = useGetProjects()
  const project = { name: 'Home', id: 'string', emoji: '🏠' }

  const username = formatUsername(user?.email)

  const onCreateNewProject = () => {
    const status = createNewProject('', user, '📄​')
    if (status === Status.SUCCESS) {
      navigate(`/${username}/${formatUrl('')}`)
    }
  }

  return (
    <Flex width='100%' height='100%'>
      <Sidebar>
        <List w='90%' mx='auto'>
          <SidebarItem project={project} type='simple' />
        </List>
      </Sidebar>
      <PanelContent>
        <VStack w='100%'>
          <Navbar />
          <Flex flexDirection='column' w='100%'>
            <Button w='6rem' onClick={onCreateNewProject}>
              New project
            </Button>
            <List w='100%'>
              {projects?.map((project) => (
                <Link to={`/${username}/${formatUrl(project?.name)}`}>{project.name}</Link>
              ))}
            </List>
          </Flex>
        </VStack>
      </PanelContent>
    </Flex>
  )
}

export default Workspace
