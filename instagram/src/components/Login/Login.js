import React from 'react';

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
        <div>
                 <h1> Please Login/Create a Login</h1> 
            <form>
                <input type = "text" placeholder = "Username" value = {this.state.username} onChange ={this.usernameValue} /> 
                <input type = "text" placeholder = "Password" value = {this.state.password} onChange = {this.passwordValue}/>
                <button onClick = {this.toggle}> Login </button>
            </form>
        </div>
    )}
}

export default Login;