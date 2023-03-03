import { useEffect, useState } from 'react';
import { useToast } from 'hooks/useToast';
import { Dialog } from './components/Dialog';
import styles from './Toast.module.css';

type ToastItem = {
	id: string;
	text: string;
	type: string;
};

type ToastContainerProps = {
	data: ToastItem[];
};

export function Toast({ data }: ToastContainerProps) {
	const { hideToast } = useToast();
	const [startClosing, setStartClosing] = useState(false);

	useEffect(() => {
		if (startClosing === false && data.length > 0) {
			const timer = setTimeout(() => setStartClosing(true), 2000);
			return () => clearTimeout(timer);
		}
		if (startClosing) {
			if (data.length > 0) {
				const toast = data.slice(-1)[0];
				const timer = setTimeout(() => hideToast(toast?.id), 100);
				return () => clearTimeout(timer);
			}
			if (data.length === 0) {
				setStartClosing(false);
			}
		}
	}, [startClosing, data, hideToast]);

	return (
		<div className={styles.container}>
			{data.map(item => (
				<Dialog key={item.id} {...item} />
			))}
		</div>
	);
}
