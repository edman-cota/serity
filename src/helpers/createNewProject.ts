import database from '../firebase'
import { Status } from '../models/definitions'
import { Project } from '../models/project.model'

export const createNewProject = (name: string, user: any, emoji: any) => {
  const currentDate = new Date()
  const timestamp = currentDate.getTime() // Milliseconds

  const projectRef = database.ref(`${user?.uid}/projects`)
  const newProjectRef = projectRef.push()

  if (newProjectRef.key !== null && user?.uid !== undefined) {
    const project: Project = {
      id: newProjectRef.key,
      name: name.trim(),
      emoji: emoji,
      color: 'white',
      activeCount: 0,
      taskCount: 0,
      shared: false,
      members: [],
      columns: [],
      columnsOrder: [],
      workspaceId: '-NMKb6NYnbOhaw4BisXM',
      createdAt: timestamp.toString(),
      createdBy: user?.uid,
      showCompleted: false,
    }

    newProjectRef
      .set(project)
      .then(() => {
        return Status.SUCCESS
      })
      .catch(() => Status.ERROR)

    return Status.SUCCESS
  }
}

// Add new project to projectOrder root
// const newRef = database.ref(`${user?.uid}/projectOrder`);
// // if null, create a new list with id, if not add newID to list
// newRef.transaction((currentArray) => {
//   if (currentArray === null) {
//     return { 0: newProjectRef.key };
//   }
//   currentArray.push(newProjectRef.key);
//   return currentArray;
// });
// // 1
// const columnTodoRef = database.ref(`${user?.uid}/columns`);
// const newColTodoRef = columnTodoRef.push();
// newColTodoRef
//   .set({
//     id: newColTodoRef.key,
//     title: "To-do",
//     color: "#ee9612",
//     createdBy: user?.uid,
//     isTranslatable: true,
//     createdAt: timestamp.toString(),
//   })
//   .then(() => {
//     // Add new column to current project column order list
//     const newColTodoOrderRef = database.ref(
//       `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
//     );
//     newColTodoOrderRef.transaction((currentArray) => {
//       if (currentArray === null) {
//         return { 0: newColTodoRef.key };
//       }
//       currentArray.push(newColTodoRef.key);
//       return currentArray;
//     });
//     // 2
//     const columnInProgressRef = database.ref(`${user?.uid}/columns`);
//     const newColInProgressRef = columnInProgressRef.push();
//     newColInProgressRef
//       .set({
//         id: newColInProgressRef.key,
//         title: "In Progress",
//         color: "#ee9612",
//         createdBy: user?.uid,
//         isTranslatable: true,
//         createdAt: timestamp.toString(),
//       })
//       .then(() => {
//         // Add new column to current project column order list
//         const newColInProgressOrderRef = database.ref(
//           `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
//         );
//         newColInProgressOrderRef.transaction((currentArray) => {
//           if (currentArray === null) {
//             return { 0: newColInProgressRef.key };
//           }
//           currentArray.push(newColInProgressRef.key);
//           return currentArray;
//         });
//         // 3
//         const columnCompletedRef = database.ref(`${user?.uid}/columns`);
//         const newColCompletedRef = columnCompletedRef.push();
//         newColCompletedRef
//           .set({
//             id: newColCompletedRef.key,
//             title: "Completed",
//             color: "#ee9612",
//             createdBy: user?.uid,
//             isTranslatable: true,
//             createdAt: timestamp.toString(),
//           })
//           .then(() => {
//             // Add new column to current project column order list
//             const newColCompletedOrderRef = database.ref(
//               `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
//             );
//             newColCompletedOrderRef.transaction((currentArray) => {
//               if (currentArray === null) {
//                 return { 0: newColCompletedRef.key };
//               }
//               currentArray.push(newColCompletedRef.key);
//               return currentArray;
//             });
//           });
//       });
//   })
//   .catch(() => Status.ERROR);
