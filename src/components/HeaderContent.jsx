import React, { useContext } from 'react'
import { VscGithub } from "react-icons/vsc";
import {    
    Heading,  
    Flex,  
    Link,
    IconButton,
    Select
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
                        <Heading as="h1" size="xl" letterSpacing={"-.1rem"} p='15px'>  
                            Police Brutality Project  
                        </Heading>
                    </Flex>  
        
                    <Flex justifyContent='flex-end' alignItems='space-around'>
                        <IncidentContextConsumer>
                            { context => 
                                <Select placeholder="AL" size='lg' mr={5}>
                                    {usStates.map(state => <option key={state.abbreviation} onClick={() => context.getStateData(state.name)} >
                                        {state.abbreviation}
                                    </option>)}
                                </Select>
                            }
                        </IncidentContextConsumer>

                        <Link href='https://github.com/tyler-parker/police-brutality-project' isExternal>
                            <IconButton icon={<VscGithub />} isRound ></IconButton>
                        </Link>
                        <ColorModeSwitcher justifySelf="flex-end"/>
                    </Flex> 
            </>
    )
}
