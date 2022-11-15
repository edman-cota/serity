import { useSelector } from 'react-redux'
import { VStack, List } from '@chakra-ui/react'

import Item from '../../Item/Item'
import { RootState } from 'src/store'
import ListHeader from './ListHeader'
import AddTask from '../../Item/AddTask'
import { useGetTasks } from '@hooks/useGetTasks'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import React from 'react'

const TreeList = () => {
  const { tasks, completedTasks, isLoading } = useGetTasks()
  const showAddTask = useSelector((state: RootState) => state.showAddTask.value)
  const showCompleted = useSelector((state: RootState) => state.showCompleted.value)

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
            {showAddTask ? <AddTask /> : null}
          </VStack>

          {showCompleted && completedTasks.length > 0 ? (
            <VStack w='100%' pb='40px'>
              <ListHeader count={completedTasks.length} />
              <List width='95%' m='auto' maxWidth={880}>
                {completedTasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
            </VStack>
          ) : null}
        </VStack>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default TreeList
