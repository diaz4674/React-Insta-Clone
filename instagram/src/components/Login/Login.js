import React from 'react';
import './Login.css'
import Instagram_logo from '../../imgs/Instagram_logo.svg';

class Login extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    username: '',
    password: ''
    }
    }

    usernameValue = e =>{
        this.setState({username: e.target.value})
    }
    passwordValue = e => {
        this.setState({password: e.target.value})
    }

    toggle = () =>{

        let currentUser = localStorage.setItem('username', `${this.state.username}`);
        window.location.reload();
        Login.unmountComponentAtNode(Login)
   
    }
    render(){
    return(
        <div className ='loginPage'>
            <div className = 'inputField'>
                <img  src = {Instagram_logo}  className = 'IGLogo' />
                 <h1> Login/Create User</h1> 
            </div>
            <form>
                <input type = "text" placeholder = "Username" value = {this.state.username} onChange ={this.usernameValue} /> 
                <input type = "text" placeholder = "Password" value = {this.state.password} onChange = {this.passwordValue}/>
                <button onClick = {this.toggle}> Login </button>
            </form>
        </div>
    )}
}

export default Login;