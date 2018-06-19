import React from 'react';
import NewCustomerForm from './new_customer_form';

class NewCustomerView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="new-customer-view">
                <NewCustomerForm />
            </div>
        )
    }
}

export default NewCustomerView;