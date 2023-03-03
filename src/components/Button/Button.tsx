import styles from './Button.module.css';

type ButtonProps = {
	color: string;
	children?: React.ReactNode;
	onClick: () => void;
	style?: object;
};

export function Button({ color, children, style, onClick }: ButtonProps) {
	return (
		<button className={`${styles.btn} ${styles[color]}`} style={style} onClick={onClick}>
			{children}
		</button>
	);
}
