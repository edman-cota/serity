import React, { useState, useEffect } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import TopOptions from './TopOptions'
import 'react-calendar/dist/Calendar.css' // more from DetailTab.scss
import type { RootState } from '../../store'
import RenderDateText from './RenderDateText'
import { isToday } from '../../helpers/isToday'
import CalendarIcon from '../Icons/CalendarIcon'
import { isSameDay } from '../../helpers/isSameDay'
import { isTomorrow } from '../../helpers/isTomorrow'
import { setDueDate } from '../../helpers/setDueDate'

interface Props {
  task: any
}

const CalendarPopover = ({ task }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const workingProject = useSelector((state: RootState) => state.workingProject.value)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState(null)

  const locale = localStorage.getItem('locale') || 'en-US'

  useEffect(() => {
    setValue(task?.due && new Date(task?.due))
  }, [task])

  const onChange = (e: any) => {
    if (isToday(task?.due) && isToday(new Date(e).toISOString())) {
      return
    }

    if (isTomorrow(task?.due) && isTomorrow(new Date(e).toISOString())) {
      return
    }

    if (isSameDay(task?.due, new Date(e).toISOString())) {
      return
    }

    const status = setDueDate(user, task, e, workingProject)
    if (status === 'success') onClose()
  }

  return (
    <Popover closeOnBlur onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button onClick={onOpen}>
          <Text as='span' pr='10px' lineHeight='20px'>
            <CalendarIcon due={task?.due} />
          </Text>

          {task && task?.due && <RenderDateText due={task?.due} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent w='330px' bg='#0e1525' borderColor='#0e1525'>
        <PopoverBody p='0px' mx='auto'>
          <TopOptions task={task} onClose={onClose} />
          <Flex>
            {task && (
              <Calendar
                onChange={onChange}
                value={value}
                locale={locale}
                next2Label={null}
                prev2Label={null}
                minDetail='decade'
              />
            )}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default CalendarPopover
