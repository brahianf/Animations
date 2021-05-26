import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import logo from '@images/logo.svg';
import logoPlatzi from '@images/platzi.png'
import Portada from '@components/Portada.jsx';
import Guitarras from '@components/Guitarras.jsx';
import Footer from '@components/Footer.jsx';

class App extends React.Component {
  render(){
    return (
      <section className="Invie">
        <Portada />
        <Guitarras />
        <Footer />
      </section >
    );
  }
}

export default App;