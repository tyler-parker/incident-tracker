import React from 'react'
import { IncidentContextConsumer } from './IncidentContext'
import { Marker } from "react-simple-maps";


function MapMarkers() {
    return (
        <IncidentContextConsumer>
            {
                ({incidentsArr}) => {
                    // const latitude = incidentsArr.map(latitude => latitude.geocoding.lat)
                    // const longitude = incidentsArr.map(longitude => longitude.geocoding.long)
                    const mapMarkers = incidentsArr.map(marker => 
                        <Marker coordinates={[-111.8162931, 40.6183158]} key={marker.id}>
                            <circle r={3} fill='#F53' />
                        </Marker>    
                    )
                    return mapMarkers
                }
            }
        </IncidentContextConsumer>
    )
}

export default MapMarkers
