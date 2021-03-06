import React, { useContext } from 'react'
import { VscGithub } from "react-icons/vsc";
import {    
    Heading,  
    Flex,  
    Link,
    IconButton,
    Select,
    Button
} from "@chakra-ui/react"; 
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { IncidentContextConsumer } from '../context/IncidentContext';
import { usStates } from './States';

export function HeaderContent() {
    // const stateCodes = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    // const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    return (
            <>
                <Flex align="center" mr={5}>  
                        <Heading as="h2" size="lg" letterSpacing={"-.1rem"} p='15px'>  
                            Police Brutality Project  
                        </Heading>
                    </Flex>  
        
                    <Flex justifyContent='flex-end' alignItems='space-around'>
                        <IncidentContextConsumer>
                            { context => 
                                <Select 
                                placeholder="AL" 
                                size='md' 
                                mr={5} 
                                value={context.currentState} 
                                onChange={(e) => context.handleStateSelect(e)}
                                >
                                    {usStates.map(state => <option key={state.abbreviation}  value={state.name}>
                                        {state.abbreviation}
                                    </option>)}
                                </Select>
                            }
                        </IncidentContextConsumer>

                        <Link isExternal href="https://github.com/2020PB/police-brutality/issues/new?assignees=&labels=Incident+report&template=incident-report.md&title=Incident+in+CITY%2C+STATE">
                            <Button mr={3} bgColor={'red.500'} color={'white'}>Report an incident</Button>
                        </Link>

                        <Link isExternal href='https://github.com/tyler-parker/police-brutality-project'>
                            <IconButton icon={<VscGithub />} isRound ></IconButton>
                        </Link>
                        <ColorModeSwitcher justifySelf="flex-end"/>
                    </Flex> 
            </>
    )
}
