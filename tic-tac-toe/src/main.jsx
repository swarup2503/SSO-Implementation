import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-zrl1ab6hyhxtr2j0.us.auth0.com"
    clientId="6iS3zyer5zJ5odL7M09SOriNjpMwalBG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>

  </React.StrictMode>,
)
