import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Web from '@components/Web/Web'
import Home from '@components/Home/Home'
import Login from '@components/Login/Login'
import Updates from '@components/Updates/Updates'
import Settings from '@components/Settings/Settings'
import Register from '@components/Register/Register'
import Overview from '@components/Overview/Overview'
import MainPanel from '@components/Views/Tree/MainPanel'
import Onboarding from '@components/onboarding/Onboarding'
import PanelContent from '@components/Settings/PanelContent'
import Workspace from '@components/Views/Workspace/Workspace'

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
      <Route path='spaces/:workspace' element={<Workspace />} />

      <Route path='/:username/overview/' element={<Overview />} />
      <Route path='/:username/updates/' element={<Updates />} />
      <Route path='/:username/' element={<Web />}>
        <Route path=':project' element={<PanelContent />} />
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
