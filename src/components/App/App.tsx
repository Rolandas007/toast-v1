import { TOAST_TYPE, BUTTON_COLOR } from 'utils/constants';
import { useToast } from 'hooks/useToast';
import { Button } from 'components/Button/Button';
import styles from './App.module.css';

function App() {
	const { toast } = useToast();

	return (
		<div className={styles.container}>
			<div className={styles.column} style={{ padding: '24px' }}>
				<Button color={BUTTON_COLOR.GREEN} onClick={() => toast(TOAST_TYPE.SUCCESS, 'Successfully added')}>
					Success
				</Button>
				<Button
					color={BUTTON_COLOR.RED}
					onClick={() => toast(TOAST_TYPE.ERROR, 'Something went wrong')}
					style={{ marginTop: '8px' }}>
					Error
				</Button>
			</div>
		</div>
	);
}

export default App;
