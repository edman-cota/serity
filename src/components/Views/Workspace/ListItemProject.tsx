import { ListItem } from '@chakra-ui/react'
import { formatUrl, formatUsername } from '@helpers/formatter'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase'
import { Project } from 'src/models/project.model'

interface Props {
  project: Project
}

const ListItemProject = ({ project }: Props) => {
  const [user] = useAuthState(auth)
  const username = formatUsername(user?.email)

  return (
    <ListItem h='80px' bg='#1C2333' borderRadius={5} my='15px'>
      <Link to={`/${username}/${formatUrl(project?.name)}`}>{project.name}</Link>
    </ListItem>
  )
}

export default ListItemProject
