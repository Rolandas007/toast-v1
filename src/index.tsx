import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'context/ToastContext';
import App from 'components/App/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</React.StrictMode>,
);
