import React from "react"

const Column = () => <p>Column</p>

export default Column
// import React, { useState, useEffect } from "react";
// import { useColorMode } from "@chakra-ui/react";
// import { Container, Label, Header, HeaderRight } from "./styles";
// import styled, { css } from "styled-components";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import Card from "../Cards/Card";

// import HeaderMore from "./HeaderMore";
// import AddCard from "../Cards/AddCard";

// const grid = 8;
// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? "skyblue" : "transparent",
//   padding: grid,
//   // width: 350,
//   position: "relative",
// });

// const TaskList = styled.div`
//   padding: 6px;
//   transition: background-color 0.2s ease;

//   flex-grow: 1;
//   // height: 71vh;
//   // overflow-y: scroll;
//   white-space: nowrap;
// `;

// export default function Column({ column, tasks, index }) {
//   const { colorMode } = useColorMode();
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     setIsDark(colorMode === "dark");
//   }, [isDark, colorMode]);

//   return (
//     <Draggable draggableId={column.id} index={index}>
//       {(provided) => (
//         <Container {...provided.draggableProps} ref={provided.innerRef}>
//           <Header {...provided.dragHandleProps} isDark={isDark}>
//             <h2>{column.title}</h2>
//             {tasks && <Label color={column.color}>{tasks.length}</Label>}

//             <HeaderRight>
//               <AddCard columnId={column.id} taskIds={column.taskIds} />
//               <HeaderMore />
//             </HeaderRight>
//           </Header>

//           {/* // actual column droppable area */}
//           <Droppable droppableId={column.id} type="task">
//             {(provided, snapshot) => (
//               <TaskList
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 style={getListStyle(snapshot.isDraggingOver)}

//                 // isDraggingOver={snapshot.isDraggingOver}
//                 // isDraggingOverWith={snapshot.draggingOverWith}
//               >
//                 {tasks &&
//                   tasks.map((task, index) =>
//                     task !== undefined ? (
//                       <Card
//                         key={task.id}
//                         task={task}
//                         index={index}
//                         columnId={column.id}
//                         columnTitle={column.title}
//                       />
//                     ) : (
//                       ""
//                     )
//                   )}
//                 {provided.placeholder}
//               </TaskList>
//             )}
//           </Droppable>
//         </Container>
//       )}
//     </Draggable>
//   );
// }
