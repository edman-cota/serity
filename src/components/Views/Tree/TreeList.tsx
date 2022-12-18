import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VStack, List, Text, Flex, Button, useColorModeValue } from '@chakra-ui/react'

import Item from '../../Item/Item'
import { RootState } from 'src/store'
import AddTask from '../../Item/AddTask'
import { useGetTasks } from '@hooks/useGetTasks'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import { setShowAddTask } from '@features/counter/showAddTaskSlice'
import { FormattedMessage } from 'react-intl'

const TreeList = () => {
  const dispatch = useDispatch()
  const { tasks, isLoading } = useGetTasks()
  const showAddTask = useSelector((state: RootState) => state.showAddTask.value)
  const background = useColorModeValue('var(--gray-100)', 'var(--gray-700)')

  const handleShow = () => dispatch(setShowAddTask(!showAddTask))

  return (
    <>
      {!isLoading ? (
        <VStack w='98%' h='calc(100vh - 76px)' overflowY='auto'>
          <VStack w='100%' pb='40px'>
            <List width='95%' m='auto' maxWidth={880}>
              {tasks.map((data, index) => (
                <Item key={data.id} index={index} task={data} />
              ))}
            </List>
            {showAddTask ? null : (
              <Flex w='95%' h='40px' m='10px auto' padding='0 10px' maxWidth={880} role='group'>
                <Button
                  onClick={handleShow}
                  w='100%'
                  bg={background}
                  height='100%'
                  display='flex'
                  alignItems='center'
                  visibility='hidden'
                  border='none'
                  borderRadius='0.375rem'
                  _hover={{ background: background }}
                  _active={{ background: background }}
                  _groupHover={{ visibility: 'visible' }}
                >
                  + <FormattedMessage id='add_new_task' />
                </Button>
              </Flex>
            )}
            {showAddTask ? <AddTask /> : null}
          </VStack>
        </VStack>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default TreeList
