import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class IncidentContext extends React.Component {
    state = {
        incidentsArr: []
    }

    componentDidMount(){
        axios.get("https://api.846policebrutality.com/api/incidents?page[limit]=30")
            .then(res => res)
            .then(res => {
                this.setState({incidentsArr: [...res.data.data]})
            })
            .catch(err => console.log(err)) 
    }

    render(){
        return(
            <Provider value={{incidentsArr: this.state.incidentsArr}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {IncidentContext, Consumer as IncidentContextConsumer}