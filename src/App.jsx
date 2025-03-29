import React from 'react';
import { Box } from '@chakra-ui/react'; // Or any other layout component
import KiwiWidget from './components/KiwiWidget.jsx'; // Import the widget
import './App.css'; // Keep your existing App CSS if needed

function App() {
    return (
        // Your main application layout
        <Box /* minHeight="100vh" bg="gray.50" */ >
            {/* You can add other content here if needed, like a background page */}
            {/* <Text>My Hackathon App Background</Text> */}

            {/* Render the Kiwi Widget */}
            <KiwiWidget />

            {/* You can add more widgets or content below */}
        </Box>
    );
}

export default App;