class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some((clock) => clock.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((clock) => clock.time !== time);
		return this.alarmCollection;
	}

	getCurrentFormattedTime() {
		let currentTime = new Date();
		const options = {
			hour: 'numeric',
			minute: 'numeric',
		}
		return currentTime.toLocaleTimeString('ru-RU', options);
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((clock) => {
				if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
					clock.canCall = false;
					clock.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((clock) => clock.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

const ringingAlarm = (alarmName) => {
	console.log(`Звонит будильник ${alarmName}`);
};