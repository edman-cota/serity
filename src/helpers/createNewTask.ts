import database, { auth} from "../firebase";
import { useGetProject } from "../hooks/useGetProject";
import { ADD_TASK_ACTIVITY_TYPE } from "../constants";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  title: string;
  keyCode: any;
}

export const createNewTask = ({title, keyCode}: Props) => {
    const [user] = useAuthState(auth);
  const { project } = useGetProject();
    const workingProjectId = window.localStorage.getItem("working-project");

    if(keyCode === 13) {
        const cardRef = database.ref(`${user?.uid}/tasks`);
        const newCardRef = cardRef.push();
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
        

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ activeCount: project?.[0].activeCount + 1 });

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ taskCount: project?.[0].taskCount + 1 });

            // Add new created to To-do column
            const columnRef = database.ref(
              `${user?.uid}/columns/-Mw4Wwi2BZCRdtMv-U5u/taskIds`
            );
            columnRef.transaction((currentArray) => {
              if (currentArray === null) {
                return { 0: newCardRef.key };
              }
              currentArray.push(newCardRef.key);
              return currentArray;
            });

            // Add task to activity database
            const activityRef = database.ref(`${user?.uid}/activities`);
            const newActivityRef = activityRef.push();
            newActivityRef.set({
              id: newActivityRef.key,
              content: title,
              taskId: newCardRef.key,
              username: user?.displayName,
              projectId: workingProjectId,
              createdBy: user?.uid,
              createdAt: new Date().toISOString(),
              type: ADD_TASK_ACTIVITY_TYPE,
            });
          });
    }


  
}