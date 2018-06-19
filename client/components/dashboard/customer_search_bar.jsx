import React from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCustomers, 
         fetchSearchCustomers, 
         clearSearchCustomers,
         fetchShowCustomer
        } from '../../actions/customers_actions';

const mapStateToProps = (state) => ({
    customers: state.entities.customers,
    current_business_id: state.ui.current_business_id,
    search_customers: state.entities.search_customers
})

const mapDispatchToProps = (dispatch) => ({
    fetchCustomers: (business_id) => dispatch(fetchCustomers(business_id)),
    fetchShowCustomer: (customer_id) => dispatch(fetchShowCustomer(customer_id)),
    fetchSearchCustomers: (business_id, query) => dispatch(fetchSearchCustomers(business_id, query)),
    clearSearchCustomers: () => dispatch(clearSearchCustomers())
})

class CustomerSearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            query: '',
            timer_id: null
        }
        
        this.handleChangeDebounced = this.handleChangeDebounced.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }



    handleSelect(value, item){
        this.props.clearSearchCustomers()
        this.props.fetchShowCustomer(item.id).then(
            () => this.props.history.push('/dashboard/new-ticket-s2')
        )
    }

    handleChangeDebounced(event) {
        event.preventDefault()
        this.setState({ query: event.target.value })
        return function () {
            if (this.state.timer_id) {
                clearTimeout(this.state.timer_id)
            }
            let timer_id = setTimeout(() => {
                let id = this.props.current_business_id
                let q = this.state.query
                if (this.state.query.length > 0) {
                    this.props.fetchSearchCustomers(id,q)
                } else {
                    this.props.clearSearchCustomers()
                }
                this.setState({ timer_id: null })
            }, 1000);
            this.setState({ timer_id: timer_id })
        }.bind(this)()
    }

    render(){
        return(
            <div className="searchbar customer-search-bar">
                <Autocomplete
                    getItemValue={(item) => {
                        return item.first_name
                    }}
                    items={this.props.search_customers}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'rgb(223, 223, 223)' : 'white', fontFamily: 'sans-serif', fontWeight: '200', padding: '.5rem .5rem', fontSize: '.9rem' }} key={item.id}>
                            {item.first_name}
                        </div>
                    }
                    value={this.state.query}
                    onChange={this.handleChangeDebounced}
                    onSelect={this.handleSelect}
                    menuStyle={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        position: 'fixed',
                        overflow: 'auto',
                        maxHeight: '50%',
                    }}
                    wrapperStyle={{
                        width: "100%"
                    }}
                    inputProps={{
                        placeholder: "Search..."
                    }}      

                />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerSearchBar));