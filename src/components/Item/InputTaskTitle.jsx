/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/prop-types */
import React from "react";
import { Editable, EditableTextarea, EditablePreview } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RENAME_TASK_ACTIVITY_TYPE } from "../../constants";

import database, { auth } from "../../firebase";

const InputTemaTitle = ({ title, id, projectId }) => {
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    if (e === title) {
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

  return (
    <Editable
      defaultValue={title}
      onSubmit={handleSubmit}
      w="100%"
      minH="30px"
      maxH="120px"
      fontSize="18px"
      fontWeight={600}
    >
      <EditablePreview w="100%" />
      <EditableTextarea w="100%" h="120px" resize="none" />
    </Editable>
  );
};

export default InputTemaTitle;
