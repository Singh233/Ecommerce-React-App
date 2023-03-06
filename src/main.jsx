import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <App />

            <Toaster
                
                toastOptions={{
                    className: 'toast',
                    position: 'bottom-center',
                    style: {
                        border: 'rgba(0, 0, 0, 0.45) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
                        backgroundColor: '#212224',
                        color: 'white',
                        fontWeight: '600',
                    },
                }}
            />
        </Router>
    </React.StrictMode>
);
