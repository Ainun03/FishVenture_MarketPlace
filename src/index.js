import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
      <Provider store = { store } >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>

);

// {/* </React.StrictMode> */}