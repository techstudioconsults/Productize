export const useTime = () => {
	function formatTime(timestamp) {
		const dateObj = new Date(timestamp);
		const hours = dateObj.getHours().toString().padStart(2, '0');
		const minutes = dateObj.getMinutes().toString().padStart(2, '0');
		const timeString = `${hours}:${minutes} ${
			dateObj.getHours() >= 12 ? 'PM' : 'AM'
		}`;
		return timeString;
	}

	return formatTime;
};

export const useDate = () => {
	function formatDate(timestamp) {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const dateObj = new Date(timestamp);
		const day = dateObj.getDate();
		const month = months[dateObj.getMonth()];
		const year = dateObj.getFullYear();
		const dateString = `${day} ${month}, ${year}`;
		return dateString;
	}

	return formatDate;
};

export const useDateRangeFormat = () => {
	function convertDateFormat(timestamp) {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const dateObject = new Date(timestamp);
		const year = dateObject.getFullYear();
		const month = dateObject.getMonth() + 1; // Month is zero-based
		const day = dateObject.getDate();

		// Pad single digit month and day with leading zeros
		const formattedMonth = String(month).padStart(2, '0');
		const formattedDay = String(day).padStart(2, '0');

		// Get abbreviated month name from input date string
		const monthIndex = dateObject.getMonth();
		const abbreviatedMonth = months[monthIndex];

		// Format the output date string as 'YYYY-MM-DD'
		const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

		return formattedDate;
	}
	return convertDateFormat
};
