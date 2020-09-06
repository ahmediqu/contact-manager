import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
/**
* @author
* @function AddContact
**/

export default class AddContact extends Component {
    
    handleSubmit = (e) =>{
        e.preventDefault();

        console.log('submit button cliceed');
        console.log(this.state);
        this.props.signUp(this.state);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render() {
  return(
    <div>
        <br/>
                <h1>Registration</h1>
                <form className='container' autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField  
                        id="firstname"
                        label="First name"
                        style={{ margin: 8,maxWidth:1000 }} 
                        type="text"
                        fullWidth
                        variant="outlined"
                        placeholder="Enter your First Name"
                        required
                        onChange={this.handleChange}
                    />
                
                    <TextField  
                        id="lastname"
                        label="Last name"
                        style={{ margin: 8,maxWidth:1000 }} 
                        type="text"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={this.handleChange}
                    />
                
                    <TextField  
                        id="email"
                        label="Email"
                        style={{ margin: 8,maxWidth:1000 }} 
                        type="email"
                        fullWidth
                        variant="outlined"
                        required
                        onChange={this.handleChange}
                     
                    />
                    <TextField  
                        id="password"
                        label="Password"
                        type="password"
                        style={{ margin: 8,maxWidth:1000 }} 
                        fullWidth
                        variant="outlined"
                        required
                        onChange={this.handleChange}
                        
                    />
                    <br/>
                    <Button variant="container" type="submit" color="primary" style={{maxWidth:1000 }}>
                        Register
                    </Button>
                </form>
    </div>
   )

 }
 }

