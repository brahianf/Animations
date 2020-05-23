import React from 'react';
import logo from './logo.svg';
import { CSSTransitionGroup } from 'react-transition-group'
import logoPlatzi from './platzi.png'
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  render(){
    return (
     <section className="Invie">
        {/*Portada*/}
       <Portada />
       {/*Guitarras*/}
       <Guitarras />
       {/*Footer*/}
       <Footer />
     </section >

    );
  }
}

export default App;
