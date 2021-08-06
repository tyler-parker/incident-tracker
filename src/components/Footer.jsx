import { Box, Stack, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterContent } from './FooterContent'

export default function Footer(params) {
    return(
        <Box
            as="footer"
            role="contentinfo"
            w="100%" 
            p={4} 
            color="white"
            boxShadow='lg'
        >
            <Stack direction="row" spacing={4} align="center" justify="space-between">
                <HStack >
                    <FooterContent />
                </HStack>
                {/* <SocialMediaLinks /> */}
            </Stack>
        </Box>
    )
}