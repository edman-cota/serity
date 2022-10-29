/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { useColorMode } from "@chakra-ui/react"
import { Draggable } from "react-beautiful-dnd"

// import { Container } from "./styles";
import CardBody from "./Body"
// import CardFooter from "./CardFooter";

const grid = 8
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
})

const Card = ({ task, index, columnId, columnTitle }) => {
  const { colorMode } = useColorMode()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(colorMode === "dark")
  }, [isDark, colorMode])

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
          // isDragging={snapshot.isDragging}
          // isDark={isDark}
        >
          <CardBody
            task={task}
            index={index}
            columnId={columnId}
            columnTitle={columnTitle}
          />
        </div>
      )}
    </Draggable>
  )
}

export default Card
