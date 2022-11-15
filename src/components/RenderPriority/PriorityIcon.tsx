/* eslint-disable comma-dangle */
import { Button, Text, useToast, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsFlag } from 'react-icons/bs'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import { colors } from '@helpers/colors'
import RenderPriority from './RenderPriority'
import { priorities } from '@helpers/priorities'
import { Status } from '../../types/definitions'
import { changeTaskPriority } from '@helpers/changeTaskPriority'
import React from 'react'
import { useGetTask } from '@hooks/useGetTask'

const PriorityIcon = () => {
  const toast = useToast()
  const { task } = useGetTask()
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const updateTaskPriority = (priority: number) => {
    if (priority === task[0]?.priority) return

    const result = changeTaskPriority(user, workingProject, task[0], priority)
    if (result !== Status.SUCCESS) {
      toast({
        description: 'Failed to update priority',
        status: Status.ERROR,
        isClosable: true,
      })
    }
  }

  return (
    <Menu autoSelect={false} placement='bottom' isLazy>
      <MenuButton as={Button}>
        <RenderPriority priority={task[0]?.priority} />
      </MenuButton>

      <MenuList minW='150px'>
        {priorities.map((priority, index, { length }) => (
          <MenuItem key={priority} onClick={() => updateTaskPriority(length - (index + 1))}>
            <Text w='30px'>
              <BsFlag color={colors[index]} fontSize='14px' />
            </Text>
            <FormattedMessage id={priority} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PriorityIcon
