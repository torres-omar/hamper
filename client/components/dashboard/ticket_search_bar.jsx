import React from 'react'; 
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { fetchGlobalSearchTickets, 
         fetchIdSearchTickets, 
         fetchNameSearchTickets, 
         clearSearchTickets } from '../../actions/tickets_actions';

import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    tickets: state.entities.tickets,
    search_tickets: state.entities.search_tickets,
    user: state.session.current_user,
    current_ticket_status: state.ui.current_ticket_status
})

const mapDispatchToProps = (dispatch) => ({
    fetchGlobalSearchTickets: (business_id, query, status) => dispatch(fetchGlobalSearchTickets(business_id, query, status)),
    fetchIdSearchTickets: (business_id, query, status) => dispatch(fetchIdSearchTickets(business_id, query, status)),
    fetchNameSearchTickets: (business_id, query, status) => dispatch(fetchNameSearchTickets(business_id, query, status)),
    clearSearchTickets: () => dispatch(clearSearchTickets())
})

class TicketSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            timer_id: null, 
            show_scope_options: false,
            search_scope: "Global"
        }

        this.handleChangeDebounced = this.handleChangeDebounced.bind(this);
        this.renderScopeOptions = this.renderScopeOptions.bind(this);
        this.toggleScopeOptions = this.toggleScopeOptions.bind(this);
        this.handleScopeChange = this.handleScopeChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.status != prevProps.status){
            this.setState({query: ""})
            this.props.clearSearchTickets()
        }
    }
    // handles change but only if user stops typing
    // avoids having to send multiple, continuous requests 
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
                let status = this.props.current_ticket_status
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
                    // maybe just clear tickets in redux ? 
                    this.props.fetchGlobalSearchTickets(id, 'empty-query', status)
                }
                this.setState({timer_id: null})
            }, 1000);
            this.setState({timer_id: timer_id})
        }.bind(this)()
    }

    handleSelect(value, item){
        // exposes all tickets to any user.
        // fix this later to only show tickets that belong to the current user
        this.props.clearSearchTickets()
        this.props.history.push(`/tickets/${item.id}`)
    }

    handleScopeChange(event){
        this.setState({search_scope: event.target.attributes.value.value, query: "", show_scope_options: false})
        this.props.clearSearchTickets()
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketSearchBar));