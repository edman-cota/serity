import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../../assets/img/logo.png";
import './Footer.scss'

const Footer = (): JSX.Element => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          {/* <img src={logo} alt="gpt3_logo" /> */}
          <p>
            Cota Corporation, <br /> All Rights Reserved
          </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Resources</h4>
          <Link to='/help-center'>Help Center</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/integrations'>Integrations</Link>
          <Link to='/dev'>Developers &amp; API</Link>
          <Link to='/feedback'>Feedback</Link>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/terms'>Terms & Conditions </Link>
          <Link to='/security-center'>Security</Link>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Cota</h4>
          <Link to='/features'>Features</Link>
          <Link to='/prices'>Prices</Link>
          <Link to='/download'>Download App</Link>
          <Link to='/about'>About us</Link>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2022 Cota Corporation. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
