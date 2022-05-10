/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from "react";
import { Editable, EditableTextarea, EditablePreview } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../../firebase";
import { UPDATE_DESCRIPTION_ACTIVITY_TYPE } from "../../constants";
import "./DetailTab.scss";

const Description = ({ description, title, id, projectId }) => {
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    database
      .ref(`${user?.uid}/tasks/${id}`)
      .update({ description: e.trim() })
      .then(() => {
        const activityRef = database.ref(`${user?.uid}/activities`);
        const newActivityRef = activityRef.push();
        newActivityRef.set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: title,
          description: e.trim(),
          taskId: id,
          projectId,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: UPDATE_DESCRIPTION_ACTIVITY_TYPE,
        });
      });
  };

  return (
    <Editable
      defaultValue={description}
      placeholder="Add description"
      onSubmit={handleSubmit}
      w="100%"
      minH="30px"
      maxH="200px"
    >
      <EditablePreview w="100%" />
      <EditableTextarea
        w="100%"
        h="200px"
        resize="none"
        // _focus={{ boxShadow: "xl", border: "2px", borderColor: "#8BC0EC" }}
      />
    </Editable>
  );
};

export default Description;

// A project using Youtube API that just by providing your youtube username it will be
// able to track and display a hisotry of educationnal contents videos and tutorials.
// Plus the option to add more categories
