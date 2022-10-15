/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.ts";
import { setDueToday } from "../../helpers/setDueToday";

const TodayButton = ({ onClose, dueDate, task }) => {
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  const handleSetToday = () => {
    const currentDue = new Date(dueDate).toString().slice(0, 15);
    const newDue = new Date().toString().slice(0, 15);

    if (currentDue === newDue) {
      onClose();
      return;
    }

    const status = setDueToday(user, task, workingProject);
    if (status === "success") onClose();
  };

  return (
    <Button
      h="1.875rem"
      fontSize="14px"
      onClick={handleSetToday}
      _focus={{ outline: "none" }}
    >
      <FormattedMessage id="today" />
    </Button>
  );
};

export default TodayButton;
