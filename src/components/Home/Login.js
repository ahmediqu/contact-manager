import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { loginuser } from '../../store/actions/AuthAction';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        console.log('submit button cliceed');
        console.log(this.state);
        this.props.loginuser(this.state,this.props.history);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render() {
        const {authResponse} = this.props;

        return (
            <div>
                <br/>
                <h1>Login</h1>
                <form className='container' onSubmit={this.handleSubmit}>
                    <TextField  
                        id="email"
                        label="Email"
                        style={{ margin: 8,maxWidth:1000 }} 
                        type="email"
                        fullWidth
                        required
                        onChange={this.handleChange}
                    />
                    <TextField  
                        id="password"
                        label="Password"
                        type="password"
                        style={{ margin: 8,maxWidth:1000 }} 
                        fullWidth
                        required
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button variant="outlined" type="submit" color="primary" style={{ margin: 8,maxWidth:1000 }}>
                        Login
                    </Button>
                    <b>{authResponse!=null && authResponse!=""?authResponse:null}</b>

                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authResponse: state.auth.authResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginuser:(creds,history) => dispatch(loginuser(creds,history))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)