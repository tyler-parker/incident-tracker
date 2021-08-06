import React from 'react'
import { Text,
         Center,
         Box,
         Stack
 } from "@chakra-ui/react"

export default function Title() {
    return (
        <Box mt={"200px"}>
            <Center>
                <Stack>
                    <Text fontSize={'4xl'} mt={5}>Acts of Violence Against George Floyd Protestors</Text>
                    <Text fontSize={'xl'} color={'gray.500'}>
                        Incidents of brutality against protestors that are protesting that same brutality
                    </Text>
                </Stack>
            </Center>   
        </Box>
    )
}
