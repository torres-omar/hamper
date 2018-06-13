import React from 'react'; 
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { fetchGlobalSearchTickets, fetchIdSearchTickets, fetchNameSearchTickets } from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    tickets: state.entities.tickets,
    search_tickets: state.entities.search_tickets,
    user: state.session.current_user
})

const mapDispatchToProps = (dispatch) => ({
    fetchGlobalSearchTickets: (business_id, query, status) => dispatch(fetchGlobalSearchTickets(business_id, query, status)),
    fetchIdSearchTickets: (business_id, query, status) => dispatch(fetchIdSearchTickets(business_id, query, status)),
    fetchNameSearchTickets: (business_id, query, status) => dispatch(fetchNameSearchTickets(business_id, query, status))
})

class TicketSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            timer_id: null, 
            show_scope_options: false,
            search_scope: "Global", 
            ticket_status: this.props.status
        }

        this.handleChangeDebounced = this.handleChangeDebounced.bind(this)
        this.renderScopeOptions = this.renderScopeOptions.bind(this)
        this.toggleScopeOptions = this.toggleScopeOptions.bind(this)
        this.handleScopeChange = this.handleScopeChange.bind(this)
    }

    handleChangeDebounced(event){
        event.preventDefault()
        this.setState({query: event.target.value})
        return function(){
            if(this.state.timer_id){
                clearTimeout(this.state.timer_id)
            }
            let timer_id = setTimeout(() => {
                let search_scope = this.state.search_scope
                let id = this.props.user.startup_business_id
                let query = this.state.query
                let status = this.state.ticket_status
                if(this.state.query.length > 0 ){
                    if(search_scope == "Global"){
                        this.props.fetchGlobalSearchTickets(id, query, status)
                    }else if(search_scope == "Id"){
                        this.props.fetchIdSearchTickets(id, query, status)
                    }else if(search_scope == "Name"){
                        this.props.fetchNameSearchTickets(id, query, status)
                    }
                }else{
                    // come back to this. not the best solution
                    this.props.fetchGlobalSearchTickets(id, 'empty-query', status)
                }
                this.setState({timer_id: null})
            }, 1000);
            this.setState({timer_id: timer_id})
        }.bind(this)()
    }

    handleSelect(){
        alert("ticket was selected")
    }

    handleScopeChange(event){
        this.setState({search_scope: event.target.attributes.value.value})
    }

    renderScopeOptions(){
        if(this.state.show_scope_options){
            return(
                <ul> 
                    <li onClick={this.handleScopeChange} value={"Global"}>Global</li>
                    <li onClick={this.handleScopeChange} value={"Id"}>By id</li>
                    <li onClick={this.handleScopeChange} value={"Name"}>By customer name</li>
                </ul> 
            )
        }
    }

    toggleScopeOptions(){
        this.setState({show_scope_options: this.state.show_scope_options ? false : true})
    }

    render(){
        return(
            <div> 
                <Autocomplete 
                    getItemValue = {(item) => {
                        return item.date_dropped_off
                    }}
                    items = {this.props.search_tickets}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'rgb(223, 223, 223)' : 'white', fontFamily: 'sans-serif', fontWeight: '200', padding: '.5rem .5rem', fontSize: '.9rem' }} key={item.id}>
                            {item.date_dropped_off}
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
                <div> 
                    <input type="button" value="search scope" onClick={this.toggleScopeOptions}/>
                    {this.renderScopeOptions()}
                </div>
            </div>
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