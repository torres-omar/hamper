import React from 'react';


class MostFrequentCustomersView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="most-frequent-customers">
                <h2 className="most-frequent-customers__title">Most frequent customers</h2>  
            </div>
        )
    }
}

export default MostFrequentCustomersView;