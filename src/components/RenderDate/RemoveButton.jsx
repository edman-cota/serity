/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.ts";
import { removeDueDate } from "../../helpers/removeDueDate";

const RemoveButton = ({ onClose, task }) => {
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  const handleRemoveDueDate = () => {
    if (task.due === undefined) {
      onClose();
      return;
    }

    const status = removeDueDate(user, task, workingProject);
    if (status === "success") onClose();
  };

  return (
    <Button
      h="1.875rem"
      fontSize="14px"
      onClick={handleRemoveDueDate}
      _focus={{ outline: "none" }}
    >
      <FormattedMessage id="remove_date" />
    </Button>
  );
};

export default RemoveButton;
