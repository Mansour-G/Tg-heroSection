import React from 'react'
import logo from '../assets/logo.png'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nav = () => {
  return (
    <div className='flex flex-row justify-between items-center my-9'>
      <div className='flex flex-row'>
        <img src={logo} alt="logo" className='w-16 ml-16 object-contain' />
        <ul className="flex flex-row items-center gap-10 w-full font-semibold ">
          <li ><a href="#" className='border-b-2 border-mainColor pb-2'>الصفحة الرئيسية</a></li>
          <li><a href="#" className=' hover:text-mainColor hover:border-b-2 hover:border-mainColor ease-out duration-100 pb-2'>من نحن</a></li>
          <li><a href="#" className=' hover:text-mainColor hover:border-b-2 hover:border-mainColor ease-out duration-100 pb-2'>ماذا نقدم</a></li>
          <li><a href="#" className=' hover:text-mainColor hover:border-b-2 hover:border-mainColor ease-out duration-100 pb-2'>المسارات</a></li>
          <li><a href="#" className=' hover:text-mainColor hover:border-b-2 hover:border-mainColor ease-out duration-100 pb-2'>أعمالنا</a></li>
          <li><a href="#" className=' hover:text-mainColor hover:border-b-2 hover:border-mainColor ease-out duration-100 pb-2'>فريقنا</a></li>
        </ul>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <h3 className='z-10'>اسم البطل</h3>
        <FontAwesomeIcon icon={faUser} width={30} className='rounded-3xl h-5 w-5 p-2 border-2 border-semiLightGray text-mainColor z-10 cursor-pointer' />
      </div>
    </div >
  )
}

export default Nav;