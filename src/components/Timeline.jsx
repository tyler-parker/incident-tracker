import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline() {
    const [incidents, setIncidents] = useState([])

    useEffect(() => {
      axios.get("https://api.846policebrutality.com/api/incidents?page[limit]=100")
      .then(res => {setIncidents(res.data.data)})
      .catch(err => console.log(err))              
    }, [])

    const incidentElements = incidents.map(incident => 
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">{incident.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{incident.city}</h4>
            <p>
                {incident.description}
            </p>
        </VerticalTimelineElement>
    )

    return (
        <Box>
            <VerticalTimeline>
                
                {incidentElements}

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </Box>
    )
}
