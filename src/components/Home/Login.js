import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Login extends Component {
    render() {
        return (
            <div>
                <br/>
                <h1>Login</h1>
                <form className='container' noValidate autoComplete="off">
                    <TextField  
                        id="standard-full-width"
                        label="Email"
                        style={{ margin: 8,maxWidth:1000 }} 
                        type="email"
                        fullWidth
                    />
                    <TextField  
                        id="standard-full-width"
                        label="Password"
                        type="password"
                        style={{ margin: 8,maxWidth:1000 }} 
                        fullWidth
                    />
                    <br/>
                    <Button variant="outlined" color="primary" style={{ margin: 8,maxWidth:1000 }}>
                        Login
                    </Button>
                </form>
            </div>
        )
    }
}
