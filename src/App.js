import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import heroImage from './assets/person.svg'
import map from './assets/Map.svg'
import storeIcons from './assets/storeIcons.png'

// import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
// import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


import { useState } from 'react';


function App() {



  const [theme, setTheme] = useState('theme' ? 'dark' : 'light');
  const toggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  



  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    e.preventDefault()
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div className="app" data-theme={theme}>
      <div className="cursor"
        style={{ left: cursorX + 'px', top: cursorY + 'px' }}
      ></div>
      <Nav toggler={toggler} theme={theme} />


      <div className="hero" >
        <div>
          <img src={heroImage} alt="heroImage" className='heroImage' />
        </div>
        <div>
          <img src={map} alt="map" className='map' />
          <div className="heroText">
            <h1 className="right">تعـلم <span>تخصـص</span></h1>
            <h1 className="center"><span>بمسـتوى</span> جامعـي</h1>
            <h1 className="left">متـاح للجميـع <span>بالمجـان</span></h1>
          </div>
        </div>
      </div>
      <div className="storeIcons">
        <img src={storeIcons} alt="" />
      </div>
      <Footer />
    </div>

  );
}

export default App;
