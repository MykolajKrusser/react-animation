import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state={
    modalIsOpen:false,
    showBlock: false
  }

  showModal = ()=>{
    this.setState({modalIsOpen: true})
  }
  closedModal = ()=>{
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button 
          className="Button" 
          onClick={()=>{this.setState(prevState=>({showBlock: !prevState.showBlock}))}}>Toggle
        </button>
        <br/>

        <Transition 
          in={this.state.showBlock} 
          timeout={1000} 
          mountOnEnter 
          unmountOnExit
          onEnter={()=>console.log('onEneter')}
          onEntering={()=>console.log('onEnetering')}
          onEntered={()=>console.log('onEnetered')}
          onExit={()=>console.log('OnExit')}
          onExiting={()=>console.log('OnExiting')}
          onExited={()=>console.log('OnExited')}>
            {state => (
              <div style={{
                backgroundColor: 'red', 
                width: '100px', 
                height: '100px', 
                margin: 'auto',
                transition: 'opacity 1s ease',
                opacity: state === 'exiting' ? 0 : 1
              }}></div>
            )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closedModal}/>
        

      
        
        <Backdrop show={this.state.modalIsOpen} closed={this.closedModal}/>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
