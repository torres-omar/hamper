import React from 'react';
import {fetchCurrentBusinessInfo} from '../../actions/businesses_actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    fetchCurrentBusinessInfo: (business_id) => dispatch(fetchCurrentBusinessInfo(business_id))
})

const mapStateToProps = (state) => ({
    current_business: state.entities.current_business,
    current_business_id: state.ui.current_business_id
})

class NewTicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bag_weight: 0.0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.fetchCurrentBusinessInfo(this.props.current_business_id)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    renderForm(){
        if(this.props.current_business){
            return(
                <form>
                    <label>
                        Bag weight (lb)
                            <input type="number" value={this.state.bag_weight} name="bag_weight" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Total
                            <h1>{this.state.bag_weight * this.props.current_business.price_per_pound}</h1>
                    </label>
                </form>
            )
        }
    }

    render(){
        return(
            <div> 
                {this.renderForm()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTicketForm);