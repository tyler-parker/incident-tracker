import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Box, Text, Link } from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiPoliceOfficerHead } from 'react-icons/gi'


export default function Timeline() {
    const [incidents, setIncidents] = useState([])

    useEffect(() => {
      axios.get("https://api.846policebrutality.com/api/incidents?page[limit]=100")
      .then(res => {setIncidents(res.data.data)})
      .catch(err => console.log(err))              
    }, [])

// Mapping api data into the timeline cards (for some reason Chakra components aren't working correctly within the timeline elements)
    const incidentElements = incidents.map(incident => 
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FF5533', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={incident.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiPoliceOfficerHead />}
        >
            <h3 className="vertical-timeline-element-title">{incident.title}</h3>
            <Text className="vertical-timeline-element-subtitle">{incident.city}</Text>
            <Text >
                {incident.description}
            </Text>
                {incident.links.map(l => <Link href={l} isExternal>{l}</Link> )}

        </VerticalTimelineElement>
    )



    return (
        <Box>
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FF5533', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={''}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GiPoliceOfficerHead />}
            >
                <h3 className="vertical-timeline-element-title">{'incident.title'}</h3>
                <Text className="vertical-timeline-element-subtitle">{'incident.city'}</Text>
                <Text >
                    {/* {incident.description} */}
                </Text>
                    {/* {incident.links.map(l => <Link href={l} isExternal>{l}</Link> )} */}
                <blockquote class="twitter-tweet">
<p lang="en" dir="ltr">LAPD just shot someone with their less lethal shotgun at almost point blank for no reason. 
<a href="https://t.co/JVDCbHgXJq">pic.twitter.com/JVDCbHgXJq
</a>
</p>&mdash; joeyneverjoe (he/him) (@joeyneverjoe) 
<a href="https://twitter.com/joeyneverjoe/status/1416461219884457984?ref_
src=twsrc%5Etfw">July 17, 2021
</a>
</blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"
></script>
            </VerticalTimelineElement>

                {incidentElements}

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </Box>
    )
}
