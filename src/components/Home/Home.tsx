import './home.scss'

import Header from '../../containers/Header/Header'
import Navbar from './Navbar/Navbar'

export const Main = (): JSX.Element => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
    </div>
  )
}

export default Main
