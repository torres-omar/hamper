import React from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { fetchCustomers, fetchSearchCustomers, clearSearchCustomers } from '../../actions/customers_actions';

const mapStateToProps = (state) => ({
    customers: state.entities.customers,
    current_business_id: state.ui.current_business_id,
    search_customers: state.entities.search_customers
})

const mapDispatchToProps = (dispatch) => ({
    fetchCustomers: (business_id) => dispatch(fetchCustomers(business_id)),
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
    }

    // componentDidMount(){
    //     this.props.fetchCustomers(this.props.current_business_id)
    // }

    onSelect(){
        alert("customer selected")
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
            <div>
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
                        position: 'static',
                        zIndex: 2,
                        overflow: 'visible'
                    }}      

                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearchBar);