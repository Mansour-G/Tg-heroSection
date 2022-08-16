import Footer from './components/Footer';
import Nav from './components/Nav';
import map from './assets/Map.svg'
import Content from './components/Content';

function App() {
  return (
    <div className='h-screen'>
      <div className='px-10 mx-10 subpixel-antialiased'>
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
