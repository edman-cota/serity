/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Flex } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { removeDueDate } from "../../helpers/removeDueDate";
import { auth } from "../../firebase";
import { setDueTomorrow } from "../../helpers/setDueTomorrow";
import TodayButton from "./TodayButton";

const TopOptions = ({ task, onClose, workingProject }) => {
  const [user] = useAuthState(auth);
  const [isToday, setIsToday] = useState(false);
  const [isTomorrow, setIsTomorrow] = useState(false);

  useEffect(() => {
    const due = new Date(task?.due).toString().slice(0, 15);
    const newDue = new Date().toString().slice(0, 15);
    if (due === newDue) {
      setIsToday(true);
    }

    // check if it's tomorrow
    const now = new Date();
    const tomorrow = new Date(now.setDate(now.getDate() + 1)).toString();
    const savedDate = new Date(task?.due).toString().slice(0, 15);
    if (tomorrow.slice(0, 15) === savedDate) {
      setIsTomorrow(true);
    }
  }, [task]);

  const handleRemoveDueDate = () => {
    if (task.due === undefined) {
      onClose();
      return;
    }

    const status = removeDueDate(user, task, workingProject);
    if (status === "success") onClose();
  };

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
    <Flex mt="20px" mb="10px" px="16px" gap="5px">
      {task && task?.due !== undefined ? (
        <Button
          h="1.875rem"
          fontSize="14px"
          onClick={handleRemoveDueDate}
          _focus={{ outline: "none" }}
        >
          <FormattedMessage id="remove_date" />
        </Button>
      ) : null}
      {isToday ? null : (
        <TodayButton
          onClose={onClose}
          dueDate={task?.due}
          user={user}
          task={task}
          workingProject={workingProject}
        />
      )}
      {isTomorrow ? null : (
        <Button
          h="1.875rem"
          fontSize="14px"
          onClick={handleSetTomorrow}
          _focus={{ outline: "none" }}
        >
          <FormattedMessage id="tomorrow" />
        </Button>
      )}
    </Flex>
  );
};

TopOptions.propTypes = {
  task: PropTypes.shape({ due: PropTypes.string }),
  onClose: PropTypes.func,
  // workingProject: PropTypes.shape({}).isRequired,
};

TopOptions.defaultProps = {
  onClose: "",
  task: {},
};

export default TopOptions;
