import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import {VisibilityProvider} from "./providers/VisibilityProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <VisibilityProvider>
        <App/>
    </VisibilityProvider>
)
