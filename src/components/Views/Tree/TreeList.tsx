import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { VStack, List, Text, Flex, Button, useColorModeValue } from '@chakra-ui/react'

import Item from '../../Item/Item'
import { RootState } from 'src/store'
import styles from './placeholder.module.scss'
import AddTask from '../../Item/AddTask'
import { useGetTasks } from '@hooks/useGetTasks'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import { setShowAddTask } from '@features/counter/showAddTaskSlice'
import { FormattedMessage } from 'react-intl'
import { getDraggedDom, getOnUpdatePlaceholderProps, getPlaceholderProps } from './placeholder'
import { Task } from 'src/models/task.model'
import EditableBlock from '@components/Item/EditableBlock'

interface PlaceholderProps {
  clientHeight: number | null
  clientWidth: number | null
  clientY: number | null
  clientX: number | null
}

const TreeList = () => {
  const dispatch = useDispatch()
  const { tasks, isLoading } = useGetTasks()
  const [placeholderProps, setPlaceholderProps] = useState({})
  const showAddTask = useSelector((state: RootState) => state.showAddTask.value)
  const background = useColorModeValue('var(--gray-100)', 'var(--gray-700)')
  const [currentTasks, setCurrentTasks] = useState<Task[]>([])

  const handleShow = () => dispatch(setShowAddTask(!showAddTask))

  const getListStyle = () => ({
    position: 'relative',
  })

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    position: 'relative',
    backgroundColor: isDragging ? 'var(--gray-700)' : 'transparent',
    ...draggableStyle,
  })

  const onDragStart = useCallback((event: any) => {
    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) return

    const { clientHeight, clientWidth, clientY, clientX } = getPlaceholderProps(draggedDOM, event)

    setPlaceholderProps({ clientHeight, clientWidth, clientY, clientX })
  }, [])

  const onDragUpdate = useCallback((event: any) => {
    if (!event.destination) return

    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) return

    const { clientHeight, clientWidth, clientY, clientX } = getOnUpdatePlaceholderProps(
      draggedDOM,
      event,
    )

    setPlaceholderProps({ clientHeight, clientWidth, clientY, clientX })
  }, [])

  const onDragEnd = (result: any) => {
    setPlaceholderProps({})
    const { destination, source, draggableId, type } = result

    setCurrentTasks((prev) => {
      const tempTasks = [...prev]
      const element = tempTasks[source.index]
      tempTasks.splice(source.index, 1)
      tempTasks.splice(destination.index, 0, element)

      return tempTasks
    })
  }

  useEffect(() => {
    setCurrentTasks([...tasks])
  }, [tasks])

  return (
    <>
      {!isLoading ? (
        <VStack w='98%' h='calc(100vh - 76px)' overflowY='auto'>
          <VStack w='100%' pb='40px'>
            <DragDropContext
              onDragStart={onDragStart}
              onDragUpdate={onDragUpdate}
              onDragEnd={onDragEnd}
            >
              <Droppable droppableId='droppable-1' type='TASK'>
                {(provided, snapshot) => (
                  <List
                    ref={provided.innerRef}
                    width='95%'
                    m='auto'
                    maxWidth={880}
                    {...provided.droppableProps}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {currentTasks.map((data, index) => (
                      <Draggable draggableId={data.id} index={index} key={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                          >
                            <Item index={index} task={data} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {placeholderProps && snapshot.isDraggingOver && (
                      <div
                        className={styles.placeholder}
                        style={{
                          top: placeholderProps.clientY,
                          left: placeholderProps.clientX,
                          height: placeholderProps.clientHeight - 2,
                          width: placeholderProps.clientWidth - 4,
                        }}
                      />
                    )}
                  </List>
                )}
              </Droppable>
            </DragDropContext>

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
