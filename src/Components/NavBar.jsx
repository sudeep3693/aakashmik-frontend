import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { useState } from 'react';
import '../App.css';
import nepImg from '../Resources/Images/nepalFlag.png';
import usaImg from '../Resources/Images/usaFlag.jpg'

function NavBar({setLanguage, lang , theme, setTheme}) {

const handleLanguage = ()=>{
setLanguage(!lang)
}

const handleTheme = ()=>{
setTheme(!theme)
}

const [imageSrc, setImageSrc] = useState(usaImg);

  const handleChangeImage = () => {
    setImageSrc(
      imageSrc === usaImg
        ? nepImg
        : usaImg
    );
  };



  return (
    <>
      <Navbar fixed='top' className='blur-navbar'>
        <Container fluid >
        <Navbar.Brand className=" App-Navbar text-primary">Aakashmik</Navbar.Brand>
        <Nav>

        <ul className="list-unstyled manual-list">
                <li><button id="langButton" className="navbarButton" onClick={() => { handleChangeImage(); handleLanguage(); }}><img src={imageSrc} alt="My Image" className="navbarButton" /></button></li>
                <li><button id="ThemeButton" className="navbarButton" onClick={handleTheme}>1</button></li>

            </ul>
        </Nav>
          
        </Container>
      </Navbar>

      </>
  )
}

export default NavBar;