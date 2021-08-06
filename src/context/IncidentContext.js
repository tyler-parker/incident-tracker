import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class IncidentContext extends React.Component {
    state = {
        incidentsArr: [],
        currentState: []
    }
    componentDidMount(){
        axios.get("https://api.846policebrutality.com/api/incidents?page[limit]=10")
            .then(res => res)
            .then(res => {
                this.setState({incidentsArr: [...res.data.data]})
            })
            .catch(err => console.log(err)) 
    }

    componentDidUpdate(prevState) {
        if (prevState.currentState !== this.state.currentState) {
            axios.get(`https://api.846policebrutality.com/api/incidents?filter[state]=${this.state.currentState}`)
            .then(res => {
                this.setState({incidentsArr: [...res.data.data]})
                console.log("state data", res.data.data)
            })
            .catch(err => console.log(err)) 
        }
    }

    handleStateSelect = (e) => {
        const {value} = e.target
        this.setState({currentState: [value]})
    }

    render(){
        return(
            <Provider value={{
                incidentsArr: this.state.incidentsArr,
                currentState: this.state.currentState, 
                handleStateSelect: this.handleStateSelect
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {IncidentContext, Consumer as IncidentContextConsumer}