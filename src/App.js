import React from 'react';
import {
  ChakraProvider,
  Box,
  Divider,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header'
import Footer from './components/Footer'
import './components/Map/styles.css'
import MapChart from './components/Map/MapChart'
import Timeline from './components/Timeline';
import About from './components/About';
import Title from './components/Title';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8}>
            <Title />
            <MapChart />
            <Divider />
            <About />
            <Divider />
            <Timeline />
          </VStack>
        </Grid>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
