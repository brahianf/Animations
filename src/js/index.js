import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
// import cheeet from 'cheet.js';

import '@styles/index.css';
import '@styles/invie.css';
import '@styles/animations.css';
import Invie from '@js/Invie';
import logoPortada from '@images/invie.png';
import logoGuitar from '@images/invie.png'
import acustica from '@images/invie-acustica.png';
import classic from '@images/invie-classic.png';
import easterA from '@images/easter-a.png'
import easterB from '@images/easter-b.png'

const initialState = {
  isAnimated: false,
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
        href:'#footer',
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

const easter = {
  isAnimated: 'is-animated',
  menu: [

  ],
  logoPortada: logoGuitar,
  guitarras: [
    {
      image: easterA,
      alt: 'Guitarra Invie Familia',
      name: 'Invie Acustica',
      features : [
        'Estilo Simpson',
        'Aire Puro',
        'Incluye estuche',
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra Invie Anime',
      name: 'Invie Classic',
      features : [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar',
      ]
    }

  ]
}

function reducer (state, action) {
  switch(action.type){
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return {...state, ...newProps}
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState);

cheet('g o' , () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
});

cheet('b a c k' , () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Invie />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root') 
);