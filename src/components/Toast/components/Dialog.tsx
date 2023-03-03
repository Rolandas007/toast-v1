import { useToast } from 'hooks/useToast';
import { TOAST_TYPE } from 'utils/constants';
import { FaTimes, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './Dialog.module.css';

type ToastItem = {
	id: string;
	type: string;
	text: string;
};

export function Dialog({ id, type, text }: ToastItem) {
	const { hideToast } = useToast();

	const renderIcon = (type: string) =>
		({
			[TOAST_TYPE.SUCCESS]: <FaCheckCircle color="#28c76f" />,
			[TOAST_TYPE.ERROR]: <FaTimesCircle color="#ea5455" />,
		}[type]);

	return (
		<div className={styles.container}>
			{renderIcon(type)}
			<p>{text || 'No text'}</p>
			<button className={styles.iconClose} onClick={() => hideToast(id)}>
				<FaTimes />
			</button>
		</div>
	);
}
