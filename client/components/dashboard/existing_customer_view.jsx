import React from 'react';
import CustomerSearchBar from './customer_search_bar';
import MostFrequentCustomersView from './most_frequent_customers_view';

class ExistingCustomerView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="existing-customer-view">
                <CustomerSearchBar />
                <MostFrequentCustomersView />
            </div>
        )
    }
}

export default ExistingCustomerView ;