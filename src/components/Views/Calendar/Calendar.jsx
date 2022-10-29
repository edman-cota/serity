import React from "react"

const Calendar = () => <p>Calendar</p>

export default Calendar

// import React, { Component } from "react";
// import { Flex } from "@chakra-ui/react";
// import Navbar from "../../Navbar/Navbar";
// import { Calendar, momentLocalizer } from "react-big-calendar";

// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// import events from "./events";

// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

// import "./Calendar.scss";

// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);

// let formats = {
//   dateFormat: "D",
//   timeGutterFormat: "h A",
// };

// // var gapi = window.gapi;
// // var CLIENT_ID =
// //   "311757794050-rvs48i871vsgsev21kca2f6u9en7mnf2.apps.googleusercontent.com";
// // var API_KEY = "AIzaSyBb59Akr4WyVLDrQboDTTRGc1Yyj_PWq_A";
// // var DISCOVERY_DOCS = [
// //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
// // ];
// // var SCOPES = "https://www.googleapis.com/auth/calendar.events";

// class Kanban extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       events: events,
//       displayDragItemInCell: true,
//     };

//     this.moveEvent = this.moveEvent.bind(this);
//     this.newEvent = this.newEvent.bind(this);
//     // this.updateSignInStatus = this.updateSignInStatus.bind(this);
//   }

//   // componentDidMount() {
//   //   gapi.load("client:auth2", () => {
//   //     console.log("loaded client");

//   //     gapi.client
//   //       .init({
//   //         apiKey: API_KEY,
//   //         clientId: CLIENT_ID,
//   //         discoveryDocs: DISCOVERY_DOCS,
//   //         scope: SCOPES,
//   //       })
//   //       .then(function () {
//   //         // Listen for sign-in state changes
//   //         // console.log(gapi.auth2.getAuthInstance().isSignedIn().get());
//   //         // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
//   //         // //Handle the initial sign-in state
//   //         // updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn().get());
//   //       });

//   //     gapi.client.load("calendar", "v3", () =>
//   //       //get events
//   //       gapi.client.calendar.events
//   //         .list({
//   //           calendarId: "primary",
//   //           timeMin: new Date().toISOString(),
//   //           showDeleted: false,
//   //           singleEvents: true,
//   //           maxResults: 10,
//   //           orderBy: "startTime",
//   //         })
//   //         .then((response) => {
//   //           const eventss = response.result.items;
//   //           eventss.map((event) => {
//   //             let hour = {
//   //               id: event.id,
//   //               title: event.summary,
//   //               allDay: false,
//   //               start: event.start.date || event.start.dateTime,
//   //               end: event.end.date || event.end.dateTime,
//   //             };
//   //             console.log(event);
//   //             this.setState({
//   //               events: this.state.events.concat([hour]),
//   //             });
//   //           });
//   //         })
//   //     );
//   //   });
//   // }

//   // handleClick = () => {
//   //   gapi.load("client:auth2", () => {
//   //     console.log("loaded client");

//   //     gapi.client
//   //       .init({
//   //         apiKey: API_KEY,
//   //         clientId: CLIENT_ID,
//   //         discoveryDocs: DISCOVERY_DOCS,
//   //         scope: SCOPES,
//   //       })
//   //       .then(function () {
//   //         // Listen for sign-in state changes
//   //         // console.log(gapi.auth2.getAuthInstance().isSignedIn().get());
//   //         // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
//   //         // //Handle the initial sign-in state
//   //         // updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn().get());
//   //       });

//   //     gapi.client.load("calendar", "v3", () => console.log("bam!"));

//   //     console.log(gapi.auth2.getAuthInstance().signIn());
//   //     //
//   //     gapi.auth2
//   //       .getAuthInstance()
//   //       .signIn()
//   //       .then(() => {
//   //         //get events
//   //         gapi.client.calendar.events
//   //           .list({
//   //             calendarId: "primary",
//   //             timeMin: new Date().toISOString(),
//   //             showDeleted: false,
//   //             singleEvents: true,
//   //             maxResults: 10,
//   //             orderBy: "startTime",
//   //           })
//   //           .then((response) => {
//   //             const eventss = response.result.items;
//   //             eventss.map((event) => {
//   //               let hour = {
//   //                 id: event.id,
//   //                 title: event.summary,
//   //                 allDay: false,
//   //                 start: event.start.date || event.start.dateTime,
//   //                 end: event.end.date || event.end.dateTime,
//   //               };

//   //               this.setState({
//   //                 events: this.state.events.concat([hour]),
//   //               });
//   //             });

//   //             console.log("EVENTS: ", eventss);
//   //             console.log(events);
//   //           });
//   //       });
//   //   });
//   // };

//   // updateSignInStatus(isSignedIn) {
//   //   if (isSignedIn) {
//   //     makeApiCall();
//   //   } else {
//   //     console.log("Not signed in yet");
//   //   }
//   // }

//   // makeApiCall = () => {};

//   handleSelect = ({ start, end }) => {
//     console.log(start);
//     console.log(end);

//     const title = window.prompt("New event name");
//     if (title) {
//       console.log(title);
//     }
//   };

//   handleDragStart = (event) => {
//     this.setState({ draggedEvent: event });
//   };

//   dragFromOutsideItem = () => {
//     return this.state.draggedEvent;
//   };

//   onDropFromOutside = ({ start, end, allDay }) => {
//     const { draggedEvent } = this.state;

//     const event = {
//       id: draggedEvent.id,
//       title: draggedEvent.title,
//       start,
//       end,
//       allDay: allDay,
//     };

//     this.setState({ draggedEvent: null });
//     this.moveEvent({ event, start, end });
//   };

//   moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
//     const { events } = this.state;

//     let allDay = event.allDay;

//     if (!event.allDay && droppedOnAllDaySlot) {
//       allDay = true;
//     } else if (event.allDay && !droppedOnAllDaySlot) {
//       allDay = false;
//     }

//     const nextEvents = events.map((existingEvent) => {
//       return existingEvent.id === event.id
//         ? { ...existingEvent, start, end, allDay }
//         : existingEvent;
//     });

//     this.setState({
//       events: nextEvents,
//     });

//     // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
//   };

//   resizeEvent = ({ event, start, end }) => {
//     const { events } = this.state;

//     const nextEvents = events.map((existingEvent) => {
//       return existingEvent.id === event.id
//         ? { ...existingEvent, start, end }
//         : existingEvent;
//     });

//     this.setState({
//       events: nextEvents,
//     });
//   };

//   newEvent = (event) => {
//     const newEvent = prompt();

//     if (!newEvent) {
//       return;
//     }

//     let idList = this.state.events.map((a) => a.id);
//     let newId = Math.max(...idList) + 1;
//     console.log(newId);
//     let hour = {
//       id: newId,
//       title: newEvent,
//       allDay: event.slots.length === 1,
//       start: event.start,
//       end: event.end,
//     };
//     this.setState({
//       events: this.state.events.concat([hour]),
//     });
//   };

//   render() {
//     return (
//       <Flex direction="column" w="100%">
//         <Navbar title="Inbox" />
//         <Flex>
//           <DnDCalendar
//             defaultDate={moment().toDate()}
//             selectable
//             localizer={localizer}
//             events={this.state.events}
//             resizable
//             step={15}
//             timeslots={4}
//             views={{ month: true, week: true, day: true }}
//             onEventResize={this.resizeEvent}
//             onEventDrop={this.moveEvent}
//             onSelectEvent={(event) => alert(event.title)}
//             onSelectSlot={this.newEvent}
//             dragFromOutsideItem={
//               this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
//             }
//             onDropFromOutside={this.onDropFromOutside}
//             handleDragStart={this.handleDragStart}
//             scrollToTime={moment().set({ h: 6, m: 0 }).toDate()}
//             // scrillToTime={new Date(Date.now())}
//             startAccessor="start"
//             endAccessor="end"
//             messages={{
//               previous: "<",
//               next: ">",
//             }}
//             // dateFormat="h"
//             formats={formats}
//           />
//         </Flex>
//       </Flex>
//     );
//   }
// }

// export default Kanban;
