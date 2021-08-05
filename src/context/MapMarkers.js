import React, { useState, useEffect } from 'react'
import { IncidentContextConsumer } from './IncidentContext'
import { Marker } from "react-simple-maps";
import axios from 'axios'


function MapMarkers() {
    const [markers, setMarkers] = useState([])
    useEffect(() => {
        axios.get('https://api.846policebrutality.com/api/incidents')
            .then(res => setMarkers([...res.data.data]))
    }, [])

    return (
        <IncidentContextConsumer>
            {
                ({incidentsArr}) => {
                    
                    // const geoCodes = incidentsArr.map((longitude, latitude) => [longitude.geocoding.long, latitude.geocoding.lat])
                    const mapMarkers = markers.map(marker => 
                        {
                            let coords = []
                            if (marker.geocoding.long === '0.0000000') {
                                coords = [-122.3320708, 47.6062095] 
                            }
                            if (marker.geocoding.lat === '0.0000000') {
                                coords = [-122.3320708, 47.6062095] 
                            }
                            else {
                                coords = [marker.geocoding.long, marker.geocoding.lat]
                            }
                            
                            return(
                                <Marker coordinates={coords} key={marker.id}>
                                    <circle r={3} fill='#F53' />
                                </Marker>    
                            )
                        }
                    )
                        return mapMarkers
                }
            }
        </IncidentContextConsumer>
    )
}

export default MapMarkers
