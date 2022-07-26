import React from 'react'
import './Nav.css'
import logo from '../../assets/LOGO.png'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


const Nav = ({ toggler, theme }) => {


  //   const chk = document.querySelector('#chk');

  // // chk.addEventListener('change', () => {
  // // 	document.body.classList.toggle('dark');
  // // });

  // const light = () =>{
  //   console.log(props)
  // }


  // const toggle = () => {
  //   const dark = document.querySelector('.dark')
  //   const light = document.querySelector('.light')


  //   if (dark.contains('show')) {
  //     dark.classList.add('hidden')
  //     light.classList.add('show')

  //   } else {
  //     dark.classList.remove('hidden')
  //     light.classList.remove('show')
  //     // dark.classList.add('show')
  //     // light.classList.remove('hidden')
  //   }


  // }


  // const [toggle, setToggle] = useState(<DarkModeTwoToneIcon />)
  // const switcher = () => {
  //   const newIcon = toggle === <DarkModeTwoToneIcon /> ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />;
  //   setToggle(newIcon)
  // }

  // const iconToggle = () => {
  //   const newIcon = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme)
  // }

  // const icontoggler = () => {
  //   toggle ? setToggle(<LightModeTwoToneIcon />) : setToggle(<DarkModeTwoToneIcon />) 
  // }



  // const [theme, setTheme] = useState('theme' ? 'dark' : 'light');
  // // const [icon, setIcon] = useState( <LightModeTwoToneIcon /> )

  // const toggler = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme)
  // }

  // const iconVar = () => {
  //   const switched = 'icon' ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />
  //   setIcon(switched)
  // }

  return (
    <div className='nav'>
      <div className='navItems'>
        <img src={logo} alt="logo" className='logo' />
        <ul className="">
          <li className="item"><a href="#" className='links active'>الصفحة الرئيسية</a></li>
          <li className="item"><a href="#" className='links'>من نحن</a></li>
          <li className="item"><a href="#" className='links'>ماذا نقدم</a></li>
          <li className="item"><a href="#" className='links'>المسارات</a></li>
          <li className="item"><a href="#" className='links'>أعمالنا</a></li>
          <li className="item"><a href="#" className='links'>فريقنا</a></li>
        </ul>
      </div>
      <div className='toggleDiv'>
        <button className='signIn'>إنظم لنا</button>
        <DarkModeTwoToneIcon className='toggle dark show' />
        <input type="checkbox" class="checkbox" id="chk" onClick={toggler} />
        <label class="label" for="chk">
          {/* <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i> */}
          <div class="ball"></div>
        </label>
          <LightModeTwoToneIcon className='toggle light' />
      </div>
      {/* <div className='toggleDiv'>
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="ball"></div>
        </label>
      </div> */}
      {/* <LightModeTwoToneIcon className='toggle light' onClick={toggler} /> */}
      {/* <DarkModeTwoToneIcon className='toggle dark show' onClick={toggler} /> */}






      {/* {toggle ? setToggle(/>) : setToggle(<LightModeTwoToneIcon className='toggle' onClick={toggler} />)} */}
      {/* <div>{light}</div>
        <div>{dark}</div> */}
      {/* <div onClick={() =>
          console.log('first')
        } className='switching'>

      </div> */}

      {/* <LightModeTwoToneIcon className='toggle'>
        </LightModeTwoToneIcon>
 */}


      {/* {theme ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />} */}
      {/* <DarkModeTwoToneIcon onClick={theme ? <DarkModeTwoToneIcon/>  : <LightModeTwoToneIcon className="toggle" />  */}
      {/* {toggler ? <DarkModeTwoToneIcon onClick={toggler} className="toggle" /> : <LightModeTwoToneIcon onClick={toggler} className="toggle" /> } */}


























    </div >
  )
}

export default Nav;