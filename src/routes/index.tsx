import '../App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../components/Home/Home'
import Web from '../components/Web/Web'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
// import AllTasks from "components/SmartFolders/AllTasks";
import Overview from '../components/Overview/Overview'
import Settings from '../components/Settings/Settings'
import FAQ from '../pages/FAQ/FAQ'
import Dev from '../pages/DevelopersAPI/Dev'

import Profile from '../components/Profile/Profile'
import Updates from '../components/Updates/Updates'
import MainPanel from '../components/Views/Tree/MainPanel'
import Onboarding from '../components/onboarding/Onboarding'

interface Props {
  currentLocale: string
  handleChange: () => void
}

const Routing = ({ currentLocale, handleChange }: Props): JSX.Element => {
  let location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="login/" element={<Login />} />
      <Route path="register/" element={<Register />} />
      <Route path="onboarding/" element={<Onboarding />} />

      <Route path="/faq/" element={<FAQ />} />
      <Route path="/dev/" element={<Dev />} />

      <Route path="/:username/overview/" element={<Overview />} />
      <Route path="/:username/updates/" element={<Updates />} />
      <Route path="/:username/" element={<Web />}>
        <Route path=":project" element={<MainPanel />} />
      </Route>

      <Route
        path="/:username/settings"
        element={<Settings currentLocale={currentLocale} handleChange={handleChange} />}
      >
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Routing
