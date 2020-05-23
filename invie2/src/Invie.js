import React from 'react';
import logo from './logo.svg';
import { CSSTransitionGroup } from 'react-transition-group'
import logoPlatzi from './platzi.png'
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

const data = {
  menu: [
    {
        href:'index.html',
        title:'Home',
    },
    {
        href:'#guitarras',
        title: 'Guitarras',
    },
    {
        href:'precios.html',
        title:'precios',
    }
  ],
  logoPortada: logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features : [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features : [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar',
      ]
    }
  ]
}

class App extends React.Component {
  render(){
    return (
     <section className="Invie">
        {/*Portada*/}
       <Portada menu={data.menu} logo={data.logoPortada}/>
       {/*Guitarras*/}
       <Guitarras guitarras={data.guitarras}/>
       {/*Footer*/}
       <Footer />
     </section >

    );
  }
}

export default App;
