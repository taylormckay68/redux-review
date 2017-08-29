import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInputChange, addChore} from './reducer'
import ChoresList from './ChoresList';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    let {handleInputChange, addChore} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input value={this.props.choresInput} placeholder="Enter Chore" onChange={(e) => handleInputChange(e.target.value)}/>
        <button onClick={() => addChore(this.props.choresInput)}>Add</button>
        <ChoresList/>
        
      </div>
    );
  }
}



function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {handleInputChange, addChore} )(App);


