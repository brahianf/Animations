import React from 'react';
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