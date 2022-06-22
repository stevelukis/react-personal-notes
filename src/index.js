import React from 'react';
import App from "./App";
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);