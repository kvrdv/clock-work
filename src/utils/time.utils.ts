const getTime = (type: string): number => {
	if (!type) {
		console.log(
			'Function call without argument! Please call with h to get hours or m to get minutes.'
		);
		return 0;
	} else {
		const date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();

		if (minutes >= 35) {
			hours = hours + 1;
		}

		if (hours > 12) {
			hours = hours - 12;
		}

		if (type === 'h') return hours;
		if (type === 'm') return minutes;
	}

	console.log('Invalid argument! Please use h to get hours or m to get minutes.');
	return 0;
};

export default getTime;
