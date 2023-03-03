import { uniqueId } from 'lodash';
import { createContext, useState } from 'react';
import { Toast } from 'components/Toast/Toast';

type ToastProviderProps = {
	children: JSX.Element | JSX.Element[];
};

type ToastItem = {
	id: string;
	text: string;
	type: string;
};

type ToastContextTypes = {
	toast: (type: string, text: string) => void;
	hideToast: (id: string) => void;
};

export const ToastContext = createContext({} as ToastContextTypes);

export function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	function toast(type: string, text: string) {
		const id = uniqueId();
		setToasts([...toasts, { id, type, text }]);
	}

	function hideToast(id: string) {
		const list = toasts.filter(item => item.id !== id);
		setToasts(list);
	}

	return (
		<>
			<ToastContext.Provider value={{ toast, hideToast }}>
				<Toast data={toasts} />
				{children}
			</ToastContext.Provider>
		</>
	);
}
