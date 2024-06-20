class Time {
  static getNow() {
    return new Date().getTime();
  }

  static getToday() {
    return new Date().toLocaleDateString();
  }

  static getTime(timestamp: string) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  static getDate(timestamp: string) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
}

export default Time;
