import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <div>
        <NavBar/>
        <div className="home-container">
        <div className="layer">
          <div className="left-container">
            <div className="home-text-container">
              <div style={{"marginTop": "8px"}}>
                <p className="home-l-text">Trabajá en casa</p>
                <p className="home-l-text-stroke">de un vecino</p>
                <p className="home-l-catchfrase">Espacios de co-working cercanos, flexibles y accesibles para estudiantes y profesionales</p>
              </div>
              <div style={{"marginTop": "2rem", "display": "flex"}}>
                <div style={{"marginRight": "1rem"}}>
                <Link smooth to='#find-your-space'>
                  <Button>
                    <p style={{fontFamily:"core-sans-c-medium"}}>Busco espacio</p>
                  </Button>
                </Link>
                </div>
                <div>
                  <Link smooth to='#offer-your-space'>
                    <Button buttonStyle="btn--secondary">
                      <p style={{fontFamily:"core-sans-c-medium"}}>Ofrezco espacio</p>
                    </Button>
                  </Link>
                </div>
                </div>
              <a href="https://wa.me/5491162355090?text=¿Cómo%20funciona%20el%20servicio?" className="whatsapp-float">
                <i className="fa fa-whatsapp my-whatsapp-float"></i>
              </a>
            </div>
          </div>
          <div className="right-container"/>
        </div>
        </div>
        <div id="find-your-space" className="find-your-space-container">
          <div className="upper-img">
            <p className="upper-img-text">reunite con tu equipo.</p>
          </div>
          <div className="orange-block"/>
          <div className="find-your-space-info-container">
            <p className="find-your-space-text">Encontrá un lugar cómodo y con buen WiFi para tener un dia productivo de trabajo con tu equipo u otros profesionales y estudiantes del barrio. Si tenés una empresa, reservá un espacio exclusivo para tus colaboradores sin compromiso de permanencia. Vos elegís el día, la zona y Ofizown te lo consigue.</p>
            <div className="find-space-button">
              <Button buttonStyle="btn--third" onClick={() => {
                window.location.href = "https://forms.gle/CYTQFNMg8h62iYW39";
                return null;
              }}><p style={{fontFamily:"core-sans-c-medium"}}>Encontrá tu espacio</p></Button>
            </div>
          </div>
        </div>
        <div id="offer-your-space" className="find-your-space-container">
          <div className="offer-img">
            <p className="offer-img-text">convertite en ofizowner.</p>
          </div>
          <div className="blue-block"/>
          <div className="offer-your-space-info-container">
            <p className="offer-your-space-text">Transformá un ambiente de tu casa en un espacio de trabajo y ofrecelo en Ofizown para generar ingresos. Vos determinas las reglas del lugar, estableces la disponibilidad y aprobás tus vicitas.</p>
            <div className="offer-space-button">
              <Button buttonStyle="btn--third" onClick={() => {
                window.location.href = "https://forms.gle/K9jfy31pUg5haqZC8";
                return null;
              }}><p style={{"fontFamily":"core-sans-c-medium"}}>Ofrecé tu espacio</p></Button>
            </div>
          </div>
        </div>
        <div className="footer-container"></div>
    </div>
  );
}

export default App;
