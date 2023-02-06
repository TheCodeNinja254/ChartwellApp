const DateTimeFormatter = ({ passedDate, timeOrDate }) => {
  const today = new Date(passedDate);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const hour = today.getHours();
  let minute = today.getMinutes();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;
  if (minute < 10) minute = `0${minute}`;

  if (timeOrDate === "time") {
    return `${hour}:${minute}Hrs`;
  }
  return `${dd}/${mm}/${yyyy}`;
};

export default DateTimeFormatter;
