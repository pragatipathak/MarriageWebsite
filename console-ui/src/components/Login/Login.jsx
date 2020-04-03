import React from 'react';  
import './style.css';  
import { DialogContent, TextField,DialogTitle,Dialog,Button } from '@material-ui/core';

class Login extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        username:''
    }
    this.handleChange = this.handleChange.bind(this);
}
handleChange(e){
  console.log('hi thereeee');
  this.setState({[e.target.id]: e.target.value});
}
  render() {  
    console.log('coming here in login',this.props,this.state);
return (  

<div style={{ width: '100%'}}>  
<Dialog open={this.props.open}
onClose = {()=>this.handleClose()}
aria-labelledby='form-dialog-title'
fullWidth
maxWidth={false}>

<DialogTitle id='form-dialog-title'>Login</DialogTitle>
<DialogContent>
  
<TextField hint text="Username" id="username" label="Username" floatingLabelFixed="editprofile" onChange={this.handleChange.bind(this)} name="user[username]" size="30" type="text" value={this.state.username} />
  <TextField label ="Password" id="password" floatingLabelFixed="editprofile" onChange={this.handleChange.bind(this)} name="user[password]" size="30" type="text" value={this.state.password} />
  <Button variant="outlined" label="Login"></Button>
</DialogContent>
</Dialog>
</div>  
 
);  
}  
} 

export default Login;