import React from 'react';

const WithAuthenticate = App => LoginPage => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            }
        }
        
        componentDidMount(){
            if(localStorage.getItem('username') === null){
                return null
            } else {
                return this.setState({loggedIn: true})
            }
        }

        render(){
            if(this.state.loggedIn === false){
                return <LoginPage/>
            } else {
                return <App />
            }
        }    
        }
    }


export default WithAuthenticate;