import React from "react";

const CreateColumn = () => <p>Column</p>;

export default CreateColumn;

// import { useState } from "react";
// import { Flex, Text, Input, Button } from "@chakra-ui/react";
// import database from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";

// export default function CreateColumn() {
//   const [user] = useAuthState(auth);
//   const [title, setTitle] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     setTitle(e.target.value);
//   };

//   const addColumn = async () => {
//     const currentDate = new Date();
//     const timestamp = currentDate.getTime(); // Milliseconds

//     // CREATE COLUMN IN DATABASE
//     const columnRef = database.ref(`${user?.uid}/columns`);
//     const newColumnRef = columnRef.push();
//     newColumnRef.set(
//       {
//         id: newColumnRef.key,
//         title: title,
//         color: "#ee9612",
//         taskIds: [""],
//         userId: user?.uid,
//         createdAt: timestamp.toString(),
//       },
//       (error) => {
//         if (error) {
//           console.log("error");
//         }
//       }
//     );
//   };

//   return (
//     <Flex>
//       <Text>Titulo</Text>
//       <Input
//         placeholder="Column name"
//         onChange={handleChange}
//         value={title}
//         type="text"
//       />
//       <Button onClick={addColumn}>Add</Button>
//     </Flex>
//   );
// }
