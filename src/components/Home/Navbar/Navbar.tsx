/* eslint-disable no-useless-return */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import logo from '../../../assets/img/logo-white.svg'
import { auth } from '../../../firebase'
import '../home.scss'
import { formatUsername } from '../../../helpers/formatter'
import { Button } from '@chakra-ui/react'

const Navbar = (): JSX.Element => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  const username = formatUsername(user?.email)

  const navigateTo = () => {
    navigate(`${username}/serity`)
  }

  useEffect(() => {
    if (loading) return
  }, [user, loading])

  return (
    <header style={{ background: 'rgb(255 255 255 / 0.15)' }}>
      <div className='header-child-child'>
        <div className='header-inside'>
          <div className='header-inside-inside'>
            <div className='header-logo'>
              <a href='/'>
                <img src={logo} alt='Serity logo' />
              </a>
              <a className='header-options' href='/pricing'>
                Serity
              </a>
            </div>
            <div className='header-login'>
              <div className='header-login-inside'>
                {user ? (
                  <Button bg='white' onClick={navigateTo}>
                    Go to Workspace
                  </Button>
                ) : (
                  <>
                    <Button bg='whiteAlpha.200' color='white' onClick={() => navigate('/login')}>
                      Login
                    </Button>
                    <Button bg='white' onClick={() => navigate('/register')}>
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
