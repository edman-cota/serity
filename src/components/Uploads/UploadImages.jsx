import React from "react"

const UploadImages = () => <p>UPlaod images</p>

export default UploadImages

// import { useState, useEffect, useMemo } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";
// import "./upload-images.scss";
// import { useDropzone } from "react-dropzone";
// import { FormattedMessage } from "react-intl";
// import { Flex, Text, Button } from "@chakra-ui/react";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import { AiOutlineCamera } from "react-icons/ai";
// import "react-datepicker/dist/react-datepicker.css";
// import { storage } from "../../firebase";
// import { MdOutlineDelete } from "react-icons/md";

// const baseStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "250px",
//   // width: "130px",
//   width: "400px",
//   padding: "20px",
//   marginTop: "16px",
//   margin: "auto",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "##33374A",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const activeStyle = {
//   borderColor: "#2196f3",
//   width: "130px",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
//   width: "130px",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
//   width: "130px",
// };

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16,
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   // border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   // width: "130px",
//   width: "100%",
//   height: "85px",
//   //   borderWidth: "1px",
//   //   borderColor: "red",
//   //   paddingBottom: 4,
//   paddingLeft: 4,
//   padddingRight: 4,
//   boxSizing: "border-box",
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   height: "100%",
//   overflow: "hidden",
//   position: "relative",
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
//   borderRadius: "5px",
// };

// const icono = {
//   position: "absolute",
//   bottom: 10,
//   left: 10,
//   zIndex: "1000",
// };

// function UploadImages(props) {
//   const [user] = useAuthState(auth);
//   const [progress, setProgress] = useState(0);
//   const [files, setFiles] = useState([]);
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     acceptedFiles,
//     open,
//   } = useDropzone({
//     accept: "image/*",
//     noClick: true,
//     noKeyboard: true,
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });

//   const deleteSelectedImageFile = () => {
//     alert("HOlfasdf");
//   };

//   const style = useMemo(
//     () => ({
//       ...baseStyle,
//       ...(isDragActive ? activeStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {}),
//     }),
//     [isDragActive, isDragReject]
//   );

//   const thumbs = files.map((file) => (
//     <div style={thumb} key={file.name}>
//       <div style={thumbInner} className="image_preview">
//         <img src={file.preview} style={img} alt="Preview" className="image" />
//         <MdOutlineDelete
//           style={icono}
//           className="delete_preview_image_icon"
//           onClick={() => deleteSelectedImageFile()}
//         />
//       </div>
//     </div>
//   ));

//   useEffect(() => {
//     if (files.length !== 0) {
//       storage.ref(`users/${user?.uid}/images/${files[0].name}`).put(files[0]);
//     }
//   }, [files, user?.uid]);

//   useEffect(
//     () => () => {
//       // Make sure to revoke the data uris to avoid memory leaks
//       files.forEach((file) => URL.revokeObjectURL(file.preview));
//     },
//     [files]
//   );

//   return (
//     <Flex direction="column" width="100%">
//       {/* <Flex alignItems="center">
//         <AiOutlineCamera />
//         <Text w="100%" pl="12px">
//           <FormattedMessage id="pictures_and_photos" />
//         </Text>
//       </Flex> */}

//       <Flex flexWrap="wrap" w="100%">
//         <Flex flexWrap="wrap" w="100%">
//           <div {...getRootProps({ style })}>
//             <input {...getInputProps()} />
//             {/* <AiOutlineCloudUpload /> */}
//             Drag and drop files here
//             <br />
//             <br />
//             <p>or</p>
//             <br />
//             <Button w="120px" onClick={open}>
//               browse files
//             </Button>
//           </div>
//           <div style={thumbsContainer}>{thumbs}</div>
//         </Flex>

//         {/* <Flex>
//           <aside style={thumbsContainer}>{thumbs}</aside>
//         </Flex> */}
//       </Flex>
//     </Flex>
//   );
// }

// export default UploadImages;
