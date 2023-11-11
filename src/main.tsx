import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import Formi from './components/form-generator/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Formi />
    </React.StrictMode>,
)
