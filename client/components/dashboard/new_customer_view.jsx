import React from 'react';
import NewCustomerForm from './new_customer_form';

class NewCustomerView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <NewCustomerForm />
        )
    }
}

export default NewCustomerView;