/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import { useAuthState } from "react-firebase-hooks/auth";
import { useColorModeValue, HStack, LightMode } from "@chakra-ui/react";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";
import editorStyles from "./SimpleMentionEditor.module.css";
import database, { auth } from "../../firebase";
import { useGetUsers } from "../../hooks/useGetUsers";

const TextInput = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const { users } = useGetUsers();
  const background = useColorModeValue("var(--gray-100)", "var(--gray-700)");
  const showAddTask = useSelector((state) => state.showAddTask.value);
  const workingProject = useSelector((state) => state.workingProject.value);
  const ref = useRef(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(users);

  useEffect(() => {
    setSuggestions(users);
  }, [suggestions, users]);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);

  const onSearchChange = useCallback(
    ({ value }) => {
      setSuggestions(defaultSuggestionsFilter(value, users));
    },
    [users]
  );

  const handleExtract = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const mentionedUsers = [];
    for (const key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);
      }
    }

    const cardRef = database.ref(`${user?.uid}/tasks`);
    const newCardRef = cardRef.push();
    newCardRef
      .set({
        id: newCardRef.key,
        content: raw.blocks[0].text,
        completed: 0,
        priority: 0,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
      })
      .then(() => {
        dispatch(setShowAddTask(!showAddTask));
      });
  };

  return (
    <HStack w="95%" maxW="1000px" bg={background} h="38px" borderRadius="base">
      <LightMode>
        <div
          className={editorStyles.editor}
          role="button"
          tabIndex={0}
          onClick={() => {
            ref.current.focus();
          }}
        >
          <Editor
            editorKey="editor"
            editorState={editorState}
            onChange={setEditorState}
            plugins={plugins}
            ref={ref}
          />
          <MentionSuggestions
            open={open}
            onOpenChange={onOpenChange}
            onSearchChange={onSearchChange}
            suggestions={suggestions}
          />
        </div>
        <div>
          <button type="submit" onClick={handleExtract}>
            Add
          </button>
        </div>
      </LightMode>
    </HStack>
  );
};

export default TextInput;
