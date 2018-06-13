import React from 'react'; 
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { fetchGlobalSearchTickets } from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    tickets: state.entities.tickets,
    search_tickets: state.entities.search_tickets,
    user: state.session.current_user
})

const mapDispatchToProps = (dispatch) => ({
    fetchGlobalSearchTickets: (business_id, query) => dispatch(fetchGlobalSearchTickets(business_id, query))
})

class TicketSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            timer_id: null
        }

        this.handleChangeDebounced = this.handleChangeDebounced.bind(this)
    }



    handleChangeDebounced(event){
        event.preventDefault()
        this.setState({query: event.target.value})
        return function(){
            if(this.state.timer_id){
                clearTimeout(this.state.timer_id)
            }
            let timer_id = setTimeout(() => {
                this.props.fetchGlobalSearchTickets(this.props.user.startup_business_id, this.state.query)
                this.setState({timer_id: null})
            }, 2000);
            this.setState({timer_id: timer_id})
        }.bind(this)()
    }


    render(){
        return(
            <Autocomplete 
                getItemValue = {(item) => item.id}
                items = {this.props.search_tickets}
                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'rgb(223, 223, 223)' : 'white', fontFamily: 'sans-serif', fontWeight: '200', padding: '.5rem .5rem', fontSize: '.9rem' }} key={item.id}>
                        {item.id}
                    </div>
                }
                value={this.state.query}
                onChange={this.handleChangeDebounced}
            /> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketSearchBar);

// wrapperStyle = {{
//     position: 'absolute',
//         top: '1rem',
//             left: '1rem',
//                 zIndex: '1',
//                 }}
// inputProps = {{
//     style: {
//         backgroundColor: 'white',
//             height: '2rem',
//                 width: '16rem',
//                     border: '1px solid #f3f3f3',
//                         fontSize: '.9rem',
//                             padding: '1rem 1rem'
//     },
//     placeholder: "Search..",
//         autoFocus: true
// }}
// menuStyle = {{
//     width: '16rem',
//                 }}