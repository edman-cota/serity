import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import type { RootState } from "../../store";
import database, { auth } from "../../firebase";

const ProjectName = () => {
  const [user] = useAuthState(auth);
  const workingProject = useSelector(
    (state: RootState) => state.workingProject.value
  );
  const [title, setTitle] = useState(
    window.localStorage.getItem("project") ??
      "Serity - Clean and simple to-do app"
  );

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleOnChange = (e: any) => {
    setTitle(e.target.value);
    database
      .ref(`${user?.uid}/projects/${workingProject.id}`)
      .update({ name: e.target.value });
  };

  return (
    <Input
      value={title}
      fontSize="18px"
      p="0px"
      border="0px"
      spellCheck={false}
      maxLength={25}
      minLength={1}
      fontWeight={700}
      placeholder="Give me a title"
      onChange={(e) => handleOnChange(e)}
      _focus={{ outline: "none" }}
    />
  );
};
export default ProjectName;
