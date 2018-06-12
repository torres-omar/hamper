import React from 'react'; 
import LogInForm from '../sessions/login_form';

class LogInPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div> 
                <LogInForm />
            </div>
        )
    }
}

export default LogInPage;