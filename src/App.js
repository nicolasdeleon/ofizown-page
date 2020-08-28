import React from 'react';
import './css/App.css';
import './components/Wallpaper';
import Wallpaper from './components/Wallpaper';
import {NavBar, NavItem} from './components/NavBar';
import Button from './components/Button';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <div>
        <NavBar>
        </NavBar>
        <div className="home-container">
          <div className="left-container">
            <div style={{"marginTop": "8px"}}>
              <p className="home-l-text">Trabajá en casa</p>
              <p className="home-l-text">de un vecino</p>
              <p>Espacios de co-working cercanos, flexibles y accesibles</p>
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
          <div className="right-container"/>
        </div>
        <div id="find-your-space" className="find-your-space-container">
          <div className="upper-img">
            <p style={{
              "color": "white",
              "margin-left": "120px",
              "font-size": "xxx-large",
              "margin-bottom": "45px"
            }}>reunite con tu equipo.</p>
          </div>
          <div className="orange-block"/>
          <div className="find-your-space-info-container">
            <p style={{"margin-left": "120px", "marginTop": "45px", "font-size": "larger", "textAlign": "left"
            }}>Encontrá un lugar cómodo y con buen WiFi para tener un dia productivo de trabajo con tu equipo u otros profesionales y estudiantes del barrio. Si tenés una empresa, reservá un espacio exclusivo para tus colaboradores sin compromiso de permanencia. Vos elegís el día, la zona y Ofizown te lo consigue.</p>
            <div style={{"margin-left": "120px", "marginTop": "45px"}}>
              <Button buttonStyle="btn--third" onClick={() => {
                window.location.href = 'https://docs.google.com/forms/d/10C2qdrpiS3Sa_UOGh-Uj4OsSwJrmHhSNQt1EmixrfwA/prefill';
                return null;
              }}>Encontrá tu espacio</Button>
            </div>
          </div>
        </div>
        <div id="offer-your-space" className="find-your-space-container">
          <div className="offer-img">
            <p style={{
              "color": "white",
              "margin-right": "120px",
              "font-size": "xxx-large",
              "margin-bottom": "45px"
            }}>convertite en ofizowner.</p>
          </div>
          <div className="blue-block"/>
          <div className="offer-your-space-info-container">
            <p style={{"margin-right": "120px", "marginTop": "45px", "font-size": "larger", "textAlign": "right"
              }}>Transformá un ambiente de tu casa en un espacio de trabajo y ofrecel en Ofizown para generar ingresos. Vos determinas las reglas del lugar, estableces la disponibilidad y aprobás tus vicitas.</p>
            <div style={{"margin-right": "120px", "marginTop": "45px"}}>
              <Button buttonStyle="btn--third" onClick={() => {
                window.location.href = "https://docs.google.com/forms/d/1DbVzTrGAjct6ppACyB1tO_ybWou4Ze-Ys-Rgkr5iXOk/prefill";
                return null;
              }}>Ofrecé tu espacio</Button>
            </div>
          </div>
        </div>
        <div className="footer-container"></div>
    </div>
  );
}

export default App;
