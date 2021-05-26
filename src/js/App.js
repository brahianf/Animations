import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import logoGuitar from '@images/invie.png'
import logo from '@images/logo.svg';
import '@styles/App.css';

class App extends React.Component {
  state = {
    logo: logo,
  }
  onClick() {
    this.setState({
      logo: logoGuitar,
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
          
          <img
            key= {this.state.logo} 
            src={this.state.logo}
            className="App-logo" 
            alt="logo" 
            />
          </CSSTransitionGroup>
          <button onClick={this.onClick.bind(this)}>Click Me!</button>
        </header>
      </div>
    );
  }
}

export default App;
