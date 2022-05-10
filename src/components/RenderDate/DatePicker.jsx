import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  useDisclosure,
  PopoverArrow,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useGetTask } from "../../hooks/useGetTask";
import "react-calendar/dist/Calendar.css";
import RenderDateText from "./RenderDateText.tsx";
import CalendarIcon from "../Icons/CalendarIcon.tsx";
import PriorityIcon from "../RenderPriority/PriorityIcon";

import { setDueDate } from "../../helpers/setDueDate";
import TopOptions from "./TopOptions";

const DatePicker = () => {
  const { task } = useGetTask();
  const initRef = React.useRef();
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const workingProject = useSelector((state) => state.workingProject.value);

  const locale = localStorage.getItem("locale");

  useEffect(() => {
    setValue(task?.at(0)?.due && new Date(task?.at(0)?.due));
  }, [task]);

  const onChange = (e) => {
    const status = setDueDate(user, task, e, workingProject);
    if (status === "success") onClose();
  };

  return (
    <HStack w="100%">
      <Popover
        closeOnBlur
        onClose={onClose}
        isOpen={isOpen}
        initialFocusRef={initRef}
      >
        <PopoverTrigger>
          <Button variant="ghost" onClick={onOpen}>
            {task?.at(0)?.due && (
              <Text as="span" pr="10px" lineHeight="20px">
                <CalendarIcon due={task.at(0).due} />
              </Text>
            )}

            {task && task.at(0) && task.at(0).due && (
              <RenderDateText due={task.at(0).due} />
            )}

            {task?.at(0)?.due === undefined ? (
              <Text as="span" pr="10px" lineHeight="20px">
                <CalendarIcon />
              </Text>
            ) : null}
          </Button>
        </PopoverTrigger>
        <PopoverContent w="350px" bg="#0e1525">
          <PopoverArrow />
          <PopoverBody p="0px">
            <TopOptions
              task={task?.at(0)}
              onClose={onClose}
              workingProject={workingProject}
            />
            <Flex>
              {task && task.at(0) && (
                <Calendar
                  onChange={onChange}
                  value={value}
                  locale={locale}
                  next2Label={null}
                  prev2Label={null}
                  minDetail="decade"
                />
              )}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Flex ml="20px">
        {task && task.at(0) && <PriorityIcon task={task?.at(0)} />}
      </Flex>
    </HStack>
  );
};

export default DatePicker;
