import React from 'react';
import './Footer.css'
import meta from '../../assets/facebook.png'
import lnkdn from '../../assets/lnkdn.png'
import tele from '../../assets/Vector.png'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact">
        <p>تواصل معنا</p>
        <a href="">
          <img src={tele} alt="" />
        </a>
        <a href="">
          <img src={lnkdn} alt="" />
        </a>
        <a href="">
          <img src={meta} alt="" />
        </a>


      </div>
      <div className="privcey">
        <p>@2022 TG Developers</p>
        <p>سياسـة الخصوصية</p>
      </div>
    </div>
  )
}

export default Footer;