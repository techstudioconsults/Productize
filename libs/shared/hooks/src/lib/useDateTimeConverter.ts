

export const useTime = () => {
  function formatTime(timestamp: string) {
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
  function formatDate(timestamp: string) {
    const months: string[] = [
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
