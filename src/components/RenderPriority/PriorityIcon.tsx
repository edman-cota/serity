/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Button, Text, useToast, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsFlag } from 'react-icons/bs'
import RenderPriority from './RenderPriority'
import { auth } from '../../firebase'
import { changeTaskPriority } from '../../helpers/changeTaskPriority'
import { priorities } from '../../helpers/priorities'
import { colors } from '../../helpers/colors'
import type { RootState } from '../../store'
import { Status } from '../../enums/definitions'

const PriorityIcon = (props: any) => {
  const toast = useToast()
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const updateTaskPriority = (priority: number) => {
    if (priority === props.task?.priority) return

    const result = changeTaskPriority(user, workingProject, props.task, priority)
    if (result !== Status.SUCCESS) {
      toast({
        description: 'Failed to update priority',
        status: Status.ERROR,
        isClosable: true,
      })
    }
  }

  return (
    <Menu autoSelect={false} placement="bottom" isLazy>
      <MenuButton as={Button}>
        <RenderPriority priority={props.task?.priority} />
      </MenuButton>

      <MenuList minW="150px">
        {priorities.map((priority, index, { length }) => (
          <MenuItem key={priority} onClick={() => updateTaskPriority(length - (index + 1))}>
            <Text w="30px">
              <BsFlag color={colors[index]} fontSize="14px" />
            </Text>
            <FormattedMessage id={priority} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PriorityIcon
