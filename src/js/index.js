// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Include global CSS file
import '../styles/index.css'; // Adjusted path to go up one level to 'src'

// Import the main layout component
import Layout from './layout.js';

// Get the root element and render the Layout component
const root = createRoot(document.getElementById("root"));
root.render(<Layout />);
