import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  PopoverArrow,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "react-calendar/dist/Calendar.css"; // more from DetailTab.scss
import { setDueDate } from "../../helpers/setDueDate";
import TopOptions from "./TopOptions";
import RenderDateText from "./RenderDateText.tsx";
import CalendarIcon from "../Icons/CalendarIcon.tsx";
import { useGetTask } from "../../hooks/useGetTask";

const CalendarPopover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const workingProject = useSelector((state) => state.workingProject.value);
  const initRef = React.useRef();
  const [user] = useAuthState(auth);
  const { task } = useGetTask();
  const [value, setValue] = useState(null);

  const locale = localStorage.getItem("locale");

  useEffect(() => {
    setValue(task?.at(0)?.due && new Date(task?.at(0)?.due));
  }, [task]);

  const onChange = (e) => {
    const status = setDueDate(user, task, e, workingProject);
    if (status === "success") onClose();
  };

  return (
    <Popover
      closeOnBlur
      onClose={onClose}
      isOpen={isOpen}
      initialFocusRef={initRef}
    >
      <PopoverTrigger>
        <Button variant="ghost" onClick={onOpen}>
          <Text as="span" pr="10px" lineHeight="20px">
            <CalendarIcon due={task?.at(0)?.due} />
          </Text>

          {task && task.at(0) && task.at(0).due && (
            <RenderDateText due={task.at(0).due} />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="330px" bg="#0e1525">
        <PopoverArrow />
        <PopoverBody p="0px" mx="auto">
          <TopOptions task={task?.at(0)} onClose={onClose} />
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
  );
};

export default CalendarPopover;
