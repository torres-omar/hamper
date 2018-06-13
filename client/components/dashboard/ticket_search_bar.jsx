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
    fetchGlobalSearchTickets: (business_id, query) => dispatch(fetchGlobalSearchTickets(business_id, query))
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

        this.handleChangeDebounced = this.handleChangeDebounced.bind(this)
        this.renderScopeOptions = this.renderScopeOptions.bind(this)
        this.toggleScopeOptions = this.toggleScopeOptions.bind(this)
    }



    handleChangeDebounced(event){
        event.preventDefault()
        this.setState({query: event.target.value})
        return function(){
            if(this.state.timer_id){
                clearTimeout(this.state.timer_id)
            }
            let timer_id = setTimeout(() => {
                if(this.state.query.length > 0 ){
                    search_scope = this.state.search_scope
                    if(search_scope == "Global"){
                        this.props.fetchGlobalSearchTickets(this.props.user.startup_business_id, this.state.query)
                    }else if(search_scope == "id"){
                        this.props.fetchIdSearchTickets()
                    }else if(search_scope == "name"){
                        this.props.fetchNameSearchTickets()
                    }
                }else{
                    // come back to this. not the best solution
                    this.props.fetchGlobalSearchTickets(this.props.user.startup_business_id, 'empty-query')
                }
                this.setState({timer_id: null})
            }, 1000);
            this.setState({timer_id: timer_id})
        }.bind(this)()
    }

    handleSelect(){
        alert("ticket was selected")
    }

    renderScopeOptions(){
        if(this.state.show_scope_options){
            return(
                <ul> 
                    <li>Global</li>
                    <li>By id</li>
                    <li>By customer name</li>
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