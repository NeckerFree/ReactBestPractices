import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactErrorBoundary from './components/ReactErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactErrorBoundary>
      <App />
    </ReactErrorBoundary>
  </React.StrictMode>,
)
