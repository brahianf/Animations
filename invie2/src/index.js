import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import cheeet from 'cheet.js';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import { Provider } from 'react-redux';
import {createStore} from 'redux'

const initialState = {
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

const easer = {
  menu: [
    {
        href:'index.html',
        title:'Home',
    },
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

cheeet('g o' , () => {
  // console.log('invie')
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easer
    }
  });
});

cheeet('b a c k' , () => {
  // console.log('regreso')
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Invie />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
