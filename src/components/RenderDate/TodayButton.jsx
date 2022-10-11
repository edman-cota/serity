/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { setDueToday } from "../../helpers/setDueToday";

const TodayButton = ({ onClose, dueDate, user, task, workingProject }) => {
  const handleSetToday = () => {
    const due = new Date(dueDate).toString().slice(0, 15);
    const newDue = new Date().toString().slice(0, 15);

    if (due === newDue) {
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
