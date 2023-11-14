import { FC } from 'react';
import styles from './App.module.scss';
import Clock from '../clock/Clock';

const App: FC = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Clock Work</h1>
			</header>
			<Clock />
			<footer className={styles.footer}>
				<p>
					Inspired by <a href="https://qlocktwo.com">QLOCKTWO</a>
				</p>
			</footer>
		</div>
	);
};

export default App;
