import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class IncidentContext extends React.Component {
    state = {
        incidentsArr: []
    }

    getStateData = (stateName) => {
        axios.get(`https://api.846policebrutality.com/api/incidents?filter[state]=${stateName}`)
            .then(res => {
                this.setState({incidentsArr: [...res.data.data]})
                console.log("state data", res.data.data)
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        axios.get("https://api.846policebrutality.com/api/incidents?page[limit]=10")
            .then(res => res)
            .then(res => {
                this.setState({incidentsArr: [...res.data.data]})
            })
            .catch(err => console.log(err)) 
    }

    render(){
        return(
            <Provider value={{incidentsArr: this.state.incidentsArr, getStateData: this.getStateData}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {IncidentContext, Consumer as IncidentContextConsumer}