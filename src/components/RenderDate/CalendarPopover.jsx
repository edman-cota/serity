/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.ts";
import "react-calendar/dist/Calendar.css"; // more from DetailTab.scss
import { setDueDate } from "../../helpers/setDueDate";
import TopOptions from "./TopOptions.tsx";
import RenderDateText from "./RenderDateText.tsx";
import CalendarIcon from "../Icons/CalendarIcon.tsx";

const CalendarPopover = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const workingProject = useSelector((state) => state.workingProject.value);
  const initRef = React.useRef();
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(null);

  const locale = localStorage.getItem("locale");

  useEffect(() => {
    setValue(task?.due && new Date(task?.due));
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
        <Button onClick={onOpen}>
          <Text as="span" pr="10px" lineHeight="20px">
            <CalendarIcon due={task?.due} />
          </Text>

          {task && task?.due && <RenderDateText due={task?.due} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="330px" bg="#0e1525" borderColor="#0e1525">
        <PopoverBody p="0px" mx="auto">
          <TopOptions task={task} onClose={onClose} />
          <Flex>
            {task && (
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
