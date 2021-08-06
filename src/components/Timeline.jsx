import { 
    Box,
    Text,
    useColorMode,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    UnorderedList,
    ListItem,
    Divider
 } from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiPoliceOfficerHead } from 'react-icons/gi'
import './styles/timelineStyles.css'
import { IncidentContextConsumer } from '../context/IncidentContext';
// import {DarkTheme} from './TwitterWidget';
import { Tweet } from 'react-twitter-widgets'

export default function Timeline() {
// Mapping api data into the timeline cards (for some reason Chakra components aren't working correctly within the timeline elements
    return (
        <Box w='100%'>
            <Text fontSize='4xl'>Timeline of Incidents</Text>
            <VerticalTimeline className={'vertical-timeline-custom-line'}>
                <IncidentContextConsumer>
                    {
                        ({incidentsArr}) => {
                            const incidentElements = incidentsArr.map(incident => 
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#FF5533', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #FF5533' }}
                                    date={incident.date}
                                    dateClassName={'vertical-timeline-element-date-light'}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<GiPoliceOfficerHead />}
                                    key={incident.id}
                                >
                                    <h3 className="vertical-timeline-element-title">{incident.title}</h3>
                                    <Text className="vertical-timeline-element-subtitle">{incident.city}</Text>
                                    
                                    <Text >
                                        {incident.description}
                                    </Text>

                                    <Divider />

                                    {/* {incident.links.map(l => <Link href={l} isExternal>{l}</Link> )} */}
                                    {incident.links.map(l => {
                                        const urlSplit = l.split('status/')
                                        const twitterID = urlSplit[1] ? urlSplit[1] : null;
                                        console.log(twitterID === null ? '' : twitterID.toString())
                                        return <Tweet tweetId={twitterID === null? '' : twitterID.toString()} options={{ theme: 'dark' }} />
                                    }  )}

                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <Text>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Links
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Text>
                                        <AccordionPanel>
                                            <UnorderedList spacing={3}>
                                                {incident.links.map(l => <ListItem><Link href={l} isExternal>{l}</Link></ListItem>)}
                                            </UnorderedList>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>

                                </VerticalTimelineElement>
                            )
                            return incidentElements
                        }
                    }
                </IncidentContextConsumer>
            </VerticalTimeline>
        </Box>
    )
}
