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

export function HeaderContent() {
    const stateCodes = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    // const incident = useContext(IncidentContextConsumer)
    return (
            <>
                <Flex align="center" mr={5}>  
                        <Heading as="h1" size="xl" letterSpacing={"-.1rem"} p='15px'>  
                            Police Brutality Project  
                        </Heading>
                    </Flex>  
        
                    <Flex justifyContent='flex-end' alignItems='space-around'>
                        {/* <IncidentContextConsumer> */}

                                <Select placeholder="AL" size='lg' mr={5}>
                                    {stateCodes.map(state => <option value={state}>
                                        {state}
                                    </option>)}
                                </Select>
   
                        {/* </IncidentContextConsumer> */}

                        <Link href='https://github.com/tyler-parker/police-brutality-project' isExternal>
                            <IconButton icon={<VscGithub />} isRound ></IconButton>
                        </Link>
                        <ColorModeSwitcher justifySelf="flex-end"/>
                    </Flex> 
            </>
    )
}
