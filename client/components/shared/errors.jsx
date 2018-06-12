import React from 'react';

class Errors extends React.Component{
    constructor(props){
        super(props)
        this.renderErrors = this.renderErrors.bind(this)
    }

    renderErrors(){
        let errors = []
        this.props.errors.forEach((error, i) => {
            errors.push(<li key={i}>{error}</li>)
        })
        return errors
    }

    render(){
        return(
            <div>
                <ul> 
                    {this.renderErrors()}
                </ul>
            </div>
        )
    }
}

export default Errors; 