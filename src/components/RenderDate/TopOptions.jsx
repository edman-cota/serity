/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import TodayButton from "./TodayButton";
import TomorrowButton from "./TomorrowButton";
import RemoveButton from "./RemoveButton";
import { isTomorrow } from "../../helpers/isTomorrow.ts";
import { isToday } from "../../helpers/isToday.ts";

const TopOptions = ({ task, onClose }) => (
  <Flex mt="20px" mb="10px" px="16px" gap="5px">
    {task && task?.due !== undefined ? (
      <RemoveButton onClose={onClose} task={task} />
    ) : null}
    {isToday(task?.due) ? null : (
      <TodayButton onClose={onClose} dueDate={task?.due} task={task} />
    )}
    {isTomorrow(task?.due) ? null : (
      <TomorrowButton onClose={onClose} task={task} />
    )}
  </Flex>
);

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
