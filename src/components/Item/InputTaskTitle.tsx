import { Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RENAME_TASK_ACTIVITY_TYPE } from "../../constants/index";
import database, { auth } from "../../firebase";

interface Props {
  content: string | undefined;
  id: string | undefined;
  projectId: string | undefined;
}

const InputTaskTitle = ({ content, id, projectId }: Props) => {
  const [user] = useAuthState(auth);

  const handleSubmit = (e: any) => {
    if (e === content) {
      return;
    } else {
      database
        .ref(`${user?.uid}/tasks/${id}`)
        .update({ content: e })
        .then(() => {
          const activityRef = database.ref(`${user?.uid}/activities`);
          const newActivityRef = activityRef.push();
          newActivityRef.set({
            id: newActivityRef.key,
            username: user?.displayName,
            content: e,
            taskId: id,
            projectId,
            createdBy: user?.uid,
            createdAt: new Date().toISOString(),
            type: RENAME_TASK_ACTIVITY_TYPE,
          });
        });
    }
  };

  return <Text w="100%"> {content} </Text>;
};

export default InputTaskTitle;
