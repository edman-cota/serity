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
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' // more from ReactCalendar.scss
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import './ReactCalendar.scss'
import { auth } from '../../firebase'
import TopOptions from './TopOptions'
import { RootState } from 'src/store'
import { isToday } from '@helpers/isToday'
import RenderDateText from './RenderDateText'
import { isSameDay } from '@helpers/isSameDay'
import { isTomorrow } from '@helpers/isTomorrow'
import { setDueDate } from '@helpers/setDueDate'
import CalendarIcon from '../Icons/CalendarIcon'
import { useGetTask } from '@hooks/useGetTask'

const CalendarPopover = () => {
  const { task } = useGetTask()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const workingProject = useSelector((state: RootState) => state.workingProject.value)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState(null)

  const locale = localStorage.getItem('locale') || 'en-US'

  useEffect(() => {
    setValue(task[0]?.due && new Date(task[0]?.due))
  }, [task])

  const onChange = (e: any) => {
    if (isToday(task[0]?.due) && isToday(new Date(e).toISOString())) {
      return
    }

    if (isTomorrow(task[0]?.due) && isTomorrow(new Date(e).toISOString())) {
      return
    }

    if (isSameDay(task[0]?.due, new Date(e).toISOString())) {
      return
    }

    const status = setDueDate(user, task, e, workingProject)
    if (status === 'success') onClose()
  }

  return (
    <Popover closeOnBlur onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button onClick={onOpen} w='max-content' px='3rem'>
          <Text as='span' px='12px'>
            <CalendarIcon due={task[0]?.due} />
          </Text>
          {task && task[0]?.due && <RenderDateText due={task[0]?.due} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent w='330px' bg='#0e1525' borderColor='#0e1525'>
        <PopoverBody p='0px' mx='auto'>
          <TopOptions onClose={onClose} />
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
