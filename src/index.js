import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
        config={ {
            signInRedirectURL: "https://localhost:3000",
            signOutRedirectURL: "https://localhost:3000",
            clientID: "RbpUVGpHGANvVeJy0_vyFnzJPwUa",
            baseUrl: "https://api.asgardeo.io/t/barathorg",
            scope: [ "openid","profile" ]
        } }
    >
    <App /></AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
