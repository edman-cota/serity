/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.ts";
import { setDueTomorrow } from "../../helpers/setDueTomorrow";

const TomorrowButton = ({ onClose, task }) => {
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  const handleSetTomorrow = () => {
    const now = new Date();
    const tomorrow = new Date(now.setDate(now.getDate() + 1)).toString();
    const savedDate = new Date(task?.due).toString().slice(0, 15);

    if (tomorrow.slice(0, 15) === savedDate) {
      onClose();
      return;
    }

    const status = setDueTomorrow(user, task, workingProject);
    if (status === "success") onClose();
  };

  return (
    <Button
      h="1.875rem"
      fontSize="14px"
      onClick={handleSetTomorrow}
      _focus={{ outline: "none" }}
    >
      <FormattedMessage id="tomorrow" />
    </Button>
  );
};

export default TomorrowButton;
