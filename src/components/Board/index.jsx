import React from "react";

const Index = () => <p>Hola mund</p>;

export default Index;

// import { useSelector } from "react-redux";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useColorMode, Flex } from "@chakra-ui/react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { isEmpty } from "lodash";
// import { motion } from "framer-motion";
// import {
//   COMPLETE_TASK_ACTIVITY_TYPE,
//   REOPEN_TASK_ACTIVITY_TYPE,
// } from "constants";
// import { useGetProject } from "../../hooks/useGetProject";
// import database, { auth } from "../../firebase";

// import "../../App.css";
// import { Container } from "./styles";

// import { useGetColumnOrder } from "../../hooks/useGetColumnOrder";

// import { Column, Label, Header, HeaderRight } from "../Column/styles";
// import CardBody from "../Cards/Body";
// import CardFooter from "../Cards/Footer";
// import HeaderMore from "../Column/HeaderMore";
// import AddCard from "../Cards/AddCard";

// const getItemStyle = (isDragging, draggableStyle, isDark) => ({
//   // some basic styles to make the items look a bit nicer
//   // userSelect: "none",
//   // // padding: grid * 2,
//   padding: "0px 15px",
//   // margin: `0 0 ${grid}px 0`,
//   marginBottom: "12px",
//   position: "relative",
//   borderRadius: 4,

//   // change background colour if dragging
//   background: isDark ? "#1F2733" : "#ffffff",
//   // background: "#ffffff",
//   // styles we need to apply on draggables
//   ...draggableStyle,
// });

// const getListStyle = () => ({
//   // overflowY: "scroll",
//   minHeight: "100px",
//   height: "calc(100% - 56px)",
//   position: "relative",
// });

// const Index = () => {
//   const [user] = useAuthState(auth);
//   const { colorMode } = useColorMode();
//   const { project } = useGetProject();
//   const workingProject = useSelector((state) => state.workingProject.value);
//   const [currentTask, setCurrentTask] = useState("");
//   const [isDark, setIsDark] = useState(false);
//   const { columnOrder, columns, tasks } = useGetColumnOrder();
//   const queryAttr = "data-rbd-drag-handle-draggable-id";
//   const [placeholderProps, setPlaceholderProps] = useState({});

//   useEffect(() => {
//     setIsDark(colorMode === "dark");
//   }, [isDark, colorMode]);

//   const getDraggedDom = (draggableId) => {
//     const domQuery = `[${queryAttr}='${draggableId}']`;
//     const draggedDOM = document.querySelector(domQuery);

//     return draggedDOM;
//   };

//   const handleDragStart = (event) => {
//     const draggedDOM = getDraggedDom(event.draggableId);

//     if (!draggedDOM) {
//       return;
//     }

//     const { clientHeight, clientWidth } = draggedDOM;
//     const sourceIndex = event.source.index;
//     var clientY =
//       parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
//       [...draggedDOM.parentNode.children]
//         .slice(0, sourceIndex)
//         .reduce((total, curr) => {
//           const style = curr.currentStyle || window.getComputedStyle(curr);
//           const marginBottom = parseFloat(style.marginBottom);
//           return total + curr.clientHeight + marginBottom;
//         }, 0);

//     setPlaceholderProps({
//       clientHeight,
//       clientWidth,
//       clientY,
//       clientX: parseFloat(
//         window.getComputedStyle(draggedDOM.parentNode).paddingLeft
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     setPlaceholderProps({});

//     const { destination, source, draggableId, type } = result;

//     database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
//       let content = "";
//       snapshot.forEach((snap) => {
//         if (snap.val().id === draggableId) {
//           content = snap.val().content;
//         }
//       });
//       setCurrentTask(content);
//     });

//     if (!destination) {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     // COLUMN ORDER and COLUMN REORDERING
//     if (type === "column") {
//       const newColumnOrder = Array.from(columnOrder);
//       newColumnOrder.splice(source.index, 1);
//       newColumnOrder.splice(destination.index, 0, draggableId);

//       database.ref(`${user?.uid}/columnOrder`).set(newColumnOrder);

//       return;
//     }

//     //  MOVING IN THE SAME COLUMN
//     const start = columns[source.droppableId];
//     const finish = columns[destination.droppableId];

//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       database
//         .ref(`${user?.uid}/columns/${start.id}`)
//         .update({ taskIds: newTaskIds });
//       return;
//     }

//     // MOVING FROM ONE LIST TO ANOTHER
//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);

//     database
//       .ref(`${user?.uid}/columns/${start.id}`)
//       .update({ taskIds: startTaskIds });

//     if (Symbol.iterator in Object(finish.taskIds)) {
//       const finishTaskIds = Array.from(finish.taskIds);
//       finishTaskIds.splice(destination.index, 0, draggableId);

//       database
//         .ref(`${user?.uid}/columns/${finish.id}`)
//         .update({ taskIds: finishTaskIds });
//     } else {
//       database
//         .ref(`${user?.uid}/columns/${finish.id}`)
//         .update({ taskIds: [draggableId] });
//     }

//     // Update field 'completed' value to 1 (completed)
//     // FINISH TASK
//     if (finish.title === "Completed") {
//       database
//         .ref(`${user?.uid}/tasks/${draggableId}`)
//         .update({
//           completed: 1,
//           completedAt: new Date().toISOString(),
//         })
//         .then(() => {
//           // SUBSTRACT 1 from the total active tasks
//           database.ref(`${user?.uid}/projects/${workingProject.id}`).update({
//             activeCount: project?.[0].activeCount - 1,
//           });

//           // Save the current operation activity
//           const activityRef = database.ref(`${user?.uid}/activities`);
//           const newActivityRef = activityRef.push();
//           newActivityRef.set({
//             id: newActivityRef.key,
//             username: user?.displayName,
//             content: currentTask,
//             taskId: draggableId,
//             projectId: workingProject.id,
//             createdBy: user?.uid,
//             createdAt: new Date().toISOString(),
//             type: COMPLETE_TASK_ACTIVITY_TYPE,
//           });
//         });
//     } else {
//       // Update field 'completed' value to 0 (uncompleted)
//       database.ref(`${user?.uid}/tasks/${draggableId}`).update({
//         completed: 0,
//       });
//     }

//     //REOPEN task
//     if (start.title === "Completed" && finish.title !== "Completed") {
//       database
//         .ref(`${user?.uid}/tasks/${draggableId}`)
//         .update({
//           completed: 0,
//         })
//         .then(() => {
//           // ADD 1 from the total active tasks
//           database.ref(`${user?.uid}/projects/${workingProject.id}`).update({
//             activeCount: project?.[0].activeCount + 1,
//           });

//           // Save the current operation activity
//           const activityRef = database.ref(`${user?.uid}/activities`);
//           const newActivityRef = activityRef.push();
//           newActivityRef.set({
//             id: newActivityRef.key,
//             username: user?.displayName,
//             content: currentTask,
//             taskId: draggableId,
//             projectId: workingProject.id,
//             createdBy: user?.uid,
//             createdAt: new Date().toISOString(),
//             type: REOPEN_TASK_ACTIVITY_TYPE,
//           });
//         });
//     }
//   };

//   const handleDragUpdate = (event) => {
//     if (!event.destination) {
//       return;
//     }

//     const draggedDOM = getDraggedDom(event.draggableId);

//     if (!draggedDOM) {
//       return;
//     }

//     const { clientHeight, clientWidth } = draggedDOM;
//     const destinationIndex = event.destination.index;
//     const sourceIndex = event.source.index;

//     const childrenArray = [...draggedDOM.parentNode.children];
//     const movedItem = childrenArray[sourceIndex];
//     childrenArray.splice(sourceIndex, 1);

//     const updatedArray = [
//       ...childrenArray.slice(0, destinationIndex),
//       movedItem,
//       ...childrenArray.slice(destinationIndex + 1),
//     ];

//     var clientY =
//       parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
//       updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
//         const style = curr.currentStyle || window.getComputedStyle(curr);
//         const marginBottom = parseFloat(style.marginBottom);
//         return total + curr.clientHeight + marginBottom;
//       }, 0);

//     setPlaceholderProps({
//       clientHeight,
//       clientWidth,
//       clientY,
//       clientX: parseFloat(
//         window.getComputedStyle(draggedDOM.parentNode).paddingLeft
//       ),
//     });
//   };

//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   return (
//     <DragDropContext
//       onDragEnd={handleDragEnd}
//       onDragStart={handleDragStart}
//       onDragUpdate={handleDragUpdate}
//     >
//       <Droppable droppableId="all-columns" direction="horizontal" type="column">
//         {(provided) => (
//           <Container {...provided.droppableProps} ref={provided.innerRef}>
//             {columnOrder.map((columnId, index) => {
//               const column = columns[columnId];

//               if (column !== undefined) {
//                 const taskss =
//                   column.taskIds &&
//                   column.taskIds.map((taskId) => tasks[taskId]);

//                 // COLUMNS
//                 return (
//                   <Draggable
//                     key={column.id}
//                     draggableId={column.id}
//                     index={index}
//                   >
//                     {(provided) => (
//                       <Column
//                         {...provided.draggableProps}
//                         ref={provided.innerRef}
//                         isDark={isDark}
//                       >
//                         <Header {...provided.dragHandleProps} isDark={isDark}>
//                           <Flex
//                             h="100%"
//                             w="100%"
//                             px="3px"
//                             alignItems="center"
//                             justifyContent="space-between"
//                           >
//                             <h2> {column.title} </h2>
//                             {taskss && <Label>{taskss.length}</Label>}
//                             <HeaderRight>
//                               <AddCard
//                                 columnId={column.id}
//                                 taskIds={column.taskIds}
//                               />
//                               <HeaderMore
//                                 name={column.title}
//                                 id={column.id}
//                                 color={column.color}
//                               />
//                             </HeaderRight>
//                           </Flex>
//                           <Flex h="1px" w="96%" bg={column.color}></Flex>
//                         </Header>
//                         <Droppable droppableId={column.id} type="task">
//                           {(provided, snapshot) => (
//                             <div
//                               {...provided.droppableProps}
//                               ref={provided.innerRef}
//                               style={getListStyle(snapshot.isDraggingOver)}
//                             >
//                               {taskss &&
//                                 taskss.map((item, index) =>
//                                   item !== undefined ? (
//                                     <Draggable
//                                       key={item.id}
//                                       draggableId={item.id}
//                                       index={index}
//                                     >
//                                       {(provided, snapshot) => (
//                                         <motion.div
//                                           ref={provided.innerRef}
//                                           {...provided.draggableProps}
//                                           {...provided.dragHandleProps}
//                                           style={getItemStyle(
//                                             snapshot.isDragging,
//                                             provided.draggableProps.style,
//                                             isDark
//                                           )}
//                                         >
//                                           <CardBody
//                                             task={item}
//                                             index={index}
//                                             columnId={columnId}
//                                             columnTitle={column.title}
//                                           />
//                                           {item.due !== undefined ||
//                                           item.priority !== 0 ? (
//                                             <CardFooter task={item} />
//                                           ) : null}
//                                         </motion.div>
//                                       )}
//                                     </Draggable>
//                                   ) : (
//                                     ""
//                                   )
//                                 )}
//                               {provided.placeholder}
//                               {!isEmpty(placeholderProps) &&
//                                 snapshot.isDraggingOver && (
//                                   <div
//                                     className="placeholder"
//                                     style={{
//                                       top: placeholderProps.clientY,
//                                       left: placeholderProps.clientX,
//                                       height: placeholderProps.clientHeight,
//                                       width: placeholderProps.clientWidth,
//                                     }}
//                                   />
//                                 )}
//                             </div>
//                           )}
//                         </Droppable>
//                       </Column>
//                     )}
//                   </Draggable>
//                 );
//               }
//             })}
//           </Container>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default Index;
