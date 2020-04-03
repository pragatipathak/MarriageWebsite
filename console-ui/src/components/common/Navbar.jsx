import React,{Component} from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
//import Dialog from '../Popup/Popup';
import Popup from "@material-ui/core/Dialog";
import Login from '../Login/Login';
import { Tooltip } from '@material-ui/core';
class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
}
  
	
handleOpen(){
  console.log('hi there');
  this.setState({
open: true
  })
}

render(){

return(
<div className="bg">
      <Login
      open = {this.state.open}
      />
      
     
      <button style={{ backgroundColor: '#60B05B', color: 'white' }} onClick={this.handleOpen}><i class="fa fa-sign-in" aria-hidden="true"></i></button>
      
      </div>


)
}
}

export default Navbar;