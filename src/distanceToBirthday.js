function distanceToBirthday(date) {
  const currDate = new Date();
  currDate.setHours(0, 0, 0, 0);
  let currYear = currDate.getFullYear();

  const offset = new Date(currDate);

  offset.setFullYear(currYear + 1);

  date = new Date(date);
  date.setFullYear(currYear);

  let diff = date - currDate;

  return diff < 0 ? diff + offset.getTime() : diff;
}

export default distanceToBirthday;
