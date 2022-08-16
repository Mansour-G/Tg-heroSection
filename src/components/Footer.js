import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='bg-lightGray sticky top-full'>
      <div className='flex flex-row justify-between items-center h-14 px-10 mx-10 '>
        <div className="flex items-center">
          <p>تواصل معنا</p>
          <FontAwesomeIcon icon={faTelegram} width={30} className='mr-5 text-gray hover:text-mainColor cursor-pointer' />
          <FontAwesomeIcon icon={faLinkedin} width={30} className='text-gray hover:text-mainColor cursor-pointer ' />
          <FontAwesomeIcon icon={faFacebook} width={30} className='text-gray hover:text-mainColor cursor-pointer' />
        </div>
        <div className="flex">
          <p className='ml-8 hover:text-mainColor cursor-pointer'>سياسـة الخصوصية</p>
          <p>@2022 TG Developers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;