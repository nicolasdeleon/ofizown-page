import React from 'react';
import './css/App.css';
import './components/Wallpaper';
import Wallpaper from './components/Wallpaper';
import {NavBar, NavItem} from './components/NavBar';
import Button from './components/Button';


function App() {
  return (
    <div>
      <Wallpaper>
        <NavBar>
        </NavBar>
        <div className="home-container">
          <div className="center-container">
            <div>
              <img className="home-logo" src={require('./res/images/ofizown-mini.png')} alt="Ofizown"></img>
            </div>
            <div style={{"marginTop": "8px"}}>
              <p className="center-text">Espacios de co-working residenciales</p>
            </div>
            <div style={{"marginTop": "2rem"}}>
              <Button onClick={() => { 
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSegjMMwvZ3d1s_zRNdBTpWIkEvW7n-1sAPvRmSrk3sBba4bJA/viewform?usp=sf_link'; 
                return null;
           }}><p style={{fontFamily:"core-sans-c-medium"}}>¡Comenzá ya!</p></Button>
            <a href="https://wa.me/5491162900978?text=¿Cómo%20funciona%20el%20servicio?" className="whatsapp-float">
              <i className="fa fa-whatsapp my-whatsapp-float"></i>
            </a>
            </div>
          </div>
        </div>
        <header className="App-header">
        </header>
      </Wallpaper>
    </div>
  );
}

export default App;
