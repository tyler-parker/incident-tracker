import React from 'react'
import { IncidentContextConsumer } from './IncidentContext'
import { Marker } from "react-simple-maps";


function MapMarkers() {
    return (
        <IncidentContextConsumer>
            {
                ({incidentsArr}) => {
                    // const geoCodes = incidentsArr.map((longitude, latitude) => [longitude.geocoding.long, latitude.geocoding.lat])
                    const mapMarkers = incidentsArr.map(marker => 
                        <Marker coordinates={[-122.3320708, 47.6062095]} key={marker.id}>
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
