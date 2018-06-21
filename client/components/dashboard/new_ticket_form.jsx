import React from 'react';
import {fetchCurrentBusinessInfo} from '../../actions/businesses_actions';
import {createNewTicket} from '../../actions/tickets_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
    fetchCurrentBusinessInfo: (business_id) => dispatch(fetchCurrentBusinessInfo(business_id)),
    createNewTicket: (data, business_id) => dispatch(createNewTicket(data, business_id))
})

const mapStateToProps = (state) => ({
    current_business: state.entities.current_business,
    current_business_id: state.ui.current_business_id,
    show_customer: state.entities.show_customer
})

class NewTicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bag_weight: 0.0,
            total_price: 0.0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchCurrentBusinessInfo(this.props.current_business_id)
    }

    handleChange(e){
        let total_price = Math.round((this.props.current_business.price_per_pound * e.target.value) * 100) / 100
        this.setState({[e.target.name]: e.target.value, total_price: total_price})
    }

    handleSubmit(e){
        e.preventDefault()
        let date = new Date()
        let data = {
            business_id: this.props.current_business_id, 
            customer_id: this.props.show_customer.id, 
            date_dropped_off: date.toDateString(),
            time_dropped_off: date,
            bag_weight: this.state.bag_weight, 
            grand_total: this.state.total_price
        }
        this.props.createNewTicket(data, this.props.current_business_id).then(
            () => this.props.history.push('/dashboard/tickets')
        )
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} class="form">
                <label className="form__label-and-field">
                    Bag weight (lb)
                        <input type="number" value={this.state.bag_weight} name="bag_weight" onChange={this.handleChange} />
                </label>
                <label className="form__label-and-field">
                    Grand Total
                        <h2>{this.state.total_price}</h2>
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTicketForm));