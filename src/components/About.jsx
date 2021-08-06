import React from 'react'
import { Grid,
         Box,
         Divider,
         Center,
         Text,
         Link
    } from "@chakra-ui/react"

export default function About() {
    return (
        <>
            <Box>
                <Text fontSize={"4xl"} mb={5}>About</Text>
                <Grid templateColumns="1fr 100px 1fr" gap={4}>
                    <Box pl={6}>
                        <Center>
                            <Text>
                                <Link isExternal color='teal.500' href='https://github.com/2020PB/police-brutality'>2020PoliceBrutality</Link> formed in the wake of protests following George Floyd's murder, when municipal, state, and federal police met peaceful protesters with violence. Volunteers on Reddit created an open-source project to source, archive and visualize incidents of police brutality and abuses of power at protests from George Floyd's death onward. This website charts those incidents. Choose a state, then scroll down through the timeline to learn more about each incident.
                            </Text>
                        </Center>
                    </Box>
                    <Box >
                        <Center height='100%'>
                            <Divider orientation='vertical' />
                        </Center>
                    </Box>
                    <Box pr={6}>
                        <Center>
                        2020PoliceBrutality seeks to shine a light on the state of policing in America. We have seen police crackdown on peaceful protests, arrest citizens over freedom of speech, and kill (predominately black) citizens, stripping their right to a fair trial. This did not begin with George Floyd and it will not end until the police can be held accountable. Film the Police.
                        George Floyd, Breonna Taylor, Ahmaud Aubery, Ryan Whitaker, Eric Garner, Michael Brown Jr, Sandra Bland, Elijah McClain, Sean Monterrosa, Jacob Blake, David 'Yaya' McAtee, Tamir Rice, Akai Gurley, Philando Castile, and countless others
                        Say Their Names
                        </Center>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}
