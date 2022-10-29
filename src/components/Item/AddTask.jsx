/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useRef, useState } from "react"
import {
  useColorModeValue,
  Textarea,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
import ReactFocusLock from "react-focus-lock"
import { useDispatch, useSelector } from "react-redux"
import { BiSquareRounded } from "react-icons/bi"
import { useAuthState } from "react-firebase-hooks/auth"
import { ADD_TASK_ACTIVITY_TYPE } from "../../constants/index.ts"
import database, { auth } from "../../firebase.ts"
import { useGetProject } from "../../hooks/useGetProject.ts"
import { setShowAddTask } from "../../features/counter/showAddTaskSlice.ts"
import { scale } from "./item.transition.tsx"

const MotionFlex = chakra(motion.div, {
  /**
   ** Allow motion props and non-chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const AddTask = () => {
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const showAddTask = useSelector((state) => state.showAddTask.value)
  const workingProjectId = window.localStorage.getItem("working-project")
  const [height, setHeight] = useState(40)
  const areaRef = useRef(null)

  const handleKeyDown = (event) => {
    const keyCode = event.which || event.keyCode

    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault()

      if (title !== "") {
        dispatch(setShowAddTask(!showAddTask))
        const cardRef = database.ref(`${user?.uid}/tasks`)
        const newCardRef = cardRef.push()
        newCardRef
          .set({
            id: newCardRef.key,
            content: title,
            completed: 0,
            priority: 0,
            projectId: workingProjectId,
            createdBy: user?.uid,
            createdAt: new Date().toISOString(),
          })
          .then(() => {
            // Close add task Textarea
            setTitle("")

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ activeCount: project?.[0].activeCount + 1 })

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ taskCount: project?.[0].taskCount + 1 })

            // Add new created to To-do column
            const columnRef = database.ref(
              `${user?.uid}/columns/-Mw4Wwi2BZCRdtMv-U5u/taskIds`,
            )
            columnRef.transaction((currentArray) => {
              if (currentArray === null) {
                return { 0: newCardRef.key }
              }
              currentArray.push(newCardRef.key)
              return currentArray
            })

            // Add task to activity database
            const activityRef = database.ref(`${user?.uid}/activities`)
            const newActivityRef = activityRef.push()
            newActivityRef.set({
              id: newActivityRef.key,
              content: title,
              taskId: newCardRef.key,
              username: user?.displayName,
              projectId: workingProjectId,
              createdBy: user?.uid,
              createdAt: new Date().toISOString(),
              type: ADD_TASK_ACTIVITY_TYPE,
            })
          })
      } else {
        dispatch(setShowAddTask(!showAddTask))
      }
    }
  }

  const handleOnInput = () => {
    setHeight(areaRef.current.scrollHeight)
  }

  const background = useColorModeValue("var(--gray-100)", "var(--gray-700)")
  return (
    <MotionFlex
      variants={scale}
      initial="exit"
      animate="enter"
      exit="exit"
      display="flex"
      bg={background}
      margin="10px auto"
      px="10px"
      w="95%"
      maxWidth="880px"
      borderRadius="base"
      mb="40px"
    >
      <MotionFlex
        display="flex"
        width="38px"
        height="40px"
        justifyContent="center"
        alignItems="center"
      >
        <BiSquareRounded color="#a0aec0" fontSize={15} />
      </MotionFlex>
      <ReactFocusLock>
        <Textarea
          spellCheck="false"
          autoComplete="off"
          name="w3review"
          rows="1"
          cols="200"
          w="full"
          border="none"
          h={`${height}px`}
          ref={areaRef}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          value={title}
          onInput={handleOnInput}
        />
      </ReactFocusLock>
    </MotionFlex>
  )
}

export default AddTask
