import React from "react"

const RenderTags = () => <p>Render tags</p>

export default RenderTags
// /* eslint-disable object-curly-newline */
// /* eslint-disable arrow-body-style */
// import React, { useContext } from "react";
// import { Flex } from "@chakra-ui/react";
// import CreatableSelect from "react-select/creatable";
// import { useAuthState } from "react-firebase-hooks/auth";
// import database, { auth } from "../../firebase";

// const RenderTags = () => {
//   const [user] = useAuthState(auth);

//   const handleChange = (tag) => {

//     // Create tag to project root folder
//     const tagRef = database.ref(`${user?.uid}/tags`);
//     const newTagRef = tagRef.push();
//     newTagRef.set({
//       id: newTagRef.key,
//       global: false,
//       value: tag[0].value,
//       label: tag[0].label,
//       color: tag[0].color,
//       projectId: workingProject.value.id,
//       createdAt: new Date().toDateString(),
//       createdBy: user?.uid,
//     });
//   };

//   const customStyle = {
//     menu: (provided, state) => ({
//       ...provided,
//       width: state.selectProps.width,
//       borderBottom: "1px dotted pink",
//       color: state.selectProps.menuColor,
//       padding: 10,
//       marginRight: "30px",
//       backgroundColor: "#1f2734",
//     }),
//     control: (provided) => {
//       return {
//         ...provided,
//         width: "100%",
//         backgroundColor: "transparent",
//         border: "none !important",
//       };
//     },

//     input: (provided) => ({
//       ...provided,
//       color: "white !important",
//     }),

//     clearIndicator: (provided) => {
//       const visibility = "hidden";
//       return { ...provided, visibility };
//     },

//     singleValue: (provided, state) => {
//       const opacity = state.isDisabled ? 0.5 : 1;
//       const transition = "opacity 300ms";
//       const backgroundColor = "red";

//       return { ...provided, opacity, transition, backgroundColor };
//     },

//     multiValue: (styles, data) => {
//       return {
//         ...styles,
//         backgroundColor: data.data.color,
//       };
//     },

//     multiValueRemove: (styles, data) => ({
//       ...styles,
//       color: data.data.color,
//       ":hover": {
//         color: "white",
//       },
//     }),

//     multiValueLabel: (styles) => ({
//       ...styles,
//       color: "#ffffff",
//     }),

//     option: (styles, data) => ({
//       ...styles,
//       backgroundColor: data.data.color,
//       height: "34px",
//       display: "flex",
//       alignItems: "center",
//       borderRadius: "4px",
//       marginTop: "10px",
//     }),

//     // menuList: (styles, data) => ({
//     //   ...styles,
//     //   margin: "10px",
//     // }),
//   };

//   return (
//     <Flex w="100%" mt="50px">
//       <CreatableSelect
//         closeMenuOnSelect={false}
//         isMulti
//         onChange={handleChange}
//         // options={tags}
//         // options={colourOptions}
//         // defaultValue={tags?.slice(0, 3)}
//         styles={customStyle}
//       />
//     </Flex>
//   );
// };

// export default RenderTags;
