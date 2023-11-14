import { FC, useEffect, useState } from 'react';
import styles from './Clock.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from "uuid"
import getTime from '../../utils/time.utils';
import { hoursMap, minutesMap } from '../../data/letters-map.data';
import letters from '../../data/letters.data';

const Clock: FC = () => {
	const [hours] = useState<number>(getTime('h'));
	const [minutes] = useState<number>(getTime('m'));
	const [activeWords, setActiveWords] = useState<string[]>([]);

	const getWords = () => {
		const newActiveWords = ['word-it', 'word-is'];

		newActiveWords.push(hoursMap[hours]);

		if (minutes >= 5) {
			if (5 >= minutes || minutes <= 34) newActiveWords.push('word-past');

			if (minutes >= 35) newActiveWords.push('word-to');

			switch (minutes) {
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
					newActiveWords.push('word-twenty', 'word-five-1');
					break;
			}
		}

		newActiveWords.push(minutesMap[minutes]);

		setActiveWords(newActiveWords);
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;

		timer = setTimeout(() => {
			getWords();
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<table className={styles.clock}>
			<tbody>
				{letters.map(({ rowClass, rowItems }) => {
					return (
						<tr
							key={rowClass}
							className={cn({ [styles.row]: true, [rowClass]: rowClass })}
						>
							{rowItems.map(({ word, letter }) => {
								return (
									<td
										key={uuidv4()}
										className={cn({
											[styles.letter]: true,
											[String(word)]: word,
											[styles.active]: activeWords.includes(word || ''),
										})}
									>
										{letter}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Clock;
