import React from "react";
import "../App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home/Home";
import Web from "../components/Web/Web";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
// import AllTasks from "components/SmartFolders/AllTasks";
import Overview from "../components/Overview/Overview";
import Settings from "../components/Settings/Settings";
import FAQ from "../pages/FAQ/FAQ";
import Dev from "../pages/DevelopersAPI/Dev";

import Profile from "../components/Profile/Profile";
import Notifications from "../components/Notifications/Notifications";
import Subscription from "../components/Subscriptions/Subscription";
import Updates from "../components/Updates/Updates";
import TreeList from "../components/Views/Tree/TreeList";

const HelpCenter = React.lazy(() =>
  import("../containers/HelpCenter/HelpCenter")
);

interface Props {
  currentLocale: string;
  handleChange: any;
}

const Routing = ({ currentLocale, handleChange }: Props): JSX.Element => {
  let location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="login/" element={<Login />} />
      <Route path="register/" element={<Register />} />

      <Route path="/faq/" element={<FAQ />} />
      <Route path="/dev/" element={<Dev />} />
      <Route path="/help-center/" element={<HelpCenter />} />

      <Route path="/web/:username/overview/" element={<Overview />} />
      <Route path="/web/:username/updates/" element={<Updates />} />
      <Route path="/web/:username/p" element={<Web />}>
        <Route path=":project" element={<TreeList />} />
      </Route>

      <Route
        path="/web/:username/settings"
        element={
          <Settings currentLocale={currentLocale} handleChange={handleChange} />
        }
      >
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="subscription" element={<Subscription />} />
      </Route>
    </Routes>
  );
};

export default Routing;
