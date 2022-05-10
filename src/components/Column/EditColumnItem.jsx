import React from "react";

const EditColumnItem = () => <p>Column</p>;

export default EditColumnItem;

// import { useState } from "react";
// import {
//   useDisclosure,
//   MenuItem,
//   Modal,
//   ModalHeader,
//   ModalOverlay,
//   ModalContent,
//   ModalBody,
//   ModalFooter,
//   Flex,
//   Input,
//   Button,
//   InputGroup,
// } from "@chakra-ui/react";
// import "./EditColumn.scss";
// import { FiEdit } from "react-icons/fi";
// import { useForm } from "react-hook-form";
// import database from "../../firebase";
// import { auth } from "../../firebase";
// import { TwitterPicker } from "react-color";
// import { useAuthState } from "react-firebase-hooks/auth";

// const EditColumnItem = ({ name, id, color }) => {
//   const [user] = useAuthState(auth);
//   const [title, setTitle] = useState(name);
//   const [chosenColor, setChosenColor] = useState("#8ED1FC");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       name: title,
//     },
//   });

//   const handleChangeComplete = (color) => {
//     database.ref(`${user?.uid}/columns/${id}`).update({ color: color.hex });
//     setChosenColor(color.hex);
//   };

//   const onSubmit = (data) => {
//     database
//       .ref(`${user?.uid}/columns/${id}`)
//       .update({ title: data.name })
//       .then(() => onClose());
//   };

//   var { EditableInput } = require("react-color/lib/components/common");

//   var inputStyles = {
//     input: {
//       border: "none",
//     },
//     label: {
//       fontSize: "20px",
//       color: "#999",
//     },
//   };

//   <EditableInput
//     style={inputStyles}
//     label="hex"
//     // value={this.props.hex}
//     // onChange={this.handleChange}
//   />;

//   return (
//     <>
//       <MenuItem
//         _hover={{ background: "rgb(51, 59, 70)" }}
//         h="36px"
//         icon={<FiEdit />}
//         onClick={onOpen}
//       >
//         Edit
//       </MenuItem>

//       <Modal
//         onClose={onClose}
//         isOpen={isOpen}
//         motionPreset="slideInBottom"
//         size="xl"
//       >
//         <ModalOverlay />
//         <ModalContent maxW="400px" h="50%" bg="#282e3e">
//           <ModalHeader
//             // justifyContent="center"
//             display="flex"
//             mt="4px"
//             mb="10px"
//             fontWeight={500}
//             fontSize="17px"
//             color="white"
//           >
//             Edit column
//           </ModalHeader>

//           <ModalBody>
//             <Flex w="100%" direction="column">
//               <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
//                 <InputGroup>
//                   <Input
//                     type="text"
//                     spellCheck="false"
//                     autoComplete="false"
//                     _focus={{
//                       outline: "none",
//                       border: "1px",
//                       borderColor: "#2175e2",
//                     }}
//                     {...register("name", { required: true })}
//                     name="name"
//                   />
//                 </InputGroup>
//               </form>
//               <TwitterPicker
//                 colors={[
//                   "#60D99C",
//                   "#D062EF",
//                   "#ee9612",
//                   "#ee9612",
//                   "#FF6900",
//                   "#FCB900",
//                   "#7BDCB5",
//                   "#00D084",
//                   "#8ED1FC",
//                   "#0693E3",
//                   "#ABB8C3",
//                   "#EB144C",
//                   "#F78DA7",
//                   "#9900EF",
//                 ]}
//                 color={chosenColor}
//                 onChangeComplete={handleChangeComplete}
//                 triangle="hide"
//               />
//             </Flex>
//           </ModalBody>
//           <ModalFooter justifyContent="space-between">
//             <Button variant="ghost" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button variant="ghost" color="#9BE6FF">
//               Save
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default EditColumnItem;
