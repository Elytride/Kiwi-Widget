import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css' // Keep global styles if any

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider> {/* Ensure ChakraProvider wraps your App */}
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)