import { Routes, Route, useLocation } from 'react-router-dom'

import Web from '@components/Web/Web'
import Home from '@components/Home/Home'
import Login from '@components/Login/Login'
import Profile from '@components/Profile/Profile'
import Updates from '@components/Updates/Updates'
import Settings from '@components/Settings/Settings'
import Register from '@components/Register/Register'
import Overview from '@components/Overview/Overview'
import MainPanel from '@components/Views/Tree/MainPanel'
import Onboarding from '@components/onboarding/Onboarding'
import React from 'react'
import PanelContent from '@components/Settings/PanelContent'

interface Props {
  currentLocale: string
  handleChange: (e: any) => void
}

const Routing = ({ currentLocale, handleChange }: Props): JSX.Element => {
  let location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='login/' element={<Login />} />
      <Route path='register/' element={<Register />} />
      <Route path='onboarding/' element={<Onboarding />} />

      <Route path='/:username/overview/' element={<Overview />} />
      <Route path='/:username/updates/' element={<Updates />} />
      <Route path='/:username/' element={<Web />}>
        <Route path=':project' element={<MainPanel />} />
      </Route>

      <Route
        path='/:username/settings'
        element={<Settings currentLocale={currentLocale} handleChange={handleChange} />}
      >
        <Route path=':setting' element={<PanelContent />} />
      </Route>
    </Routes>
  )
}

export default Routing
