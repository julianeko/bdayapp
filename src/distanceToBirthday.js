function distanceToBirthday(day, month, year) {
  const currDate = new Date();
  currDate.setHours(0, 0, 0, 0);
  let currYear = currDate.getFullYear();

  const offset = new Date(currDate);

  offset.setFullYear(currYear + 1);
  console.log(offset);

  let date = new Date(currYear, month - 1, day);
  // date.setFullYear(currYear);

  let diff = date - currDate;
  console.log(date);

  return diff < 0 ? diff + offset.getTime() : diff;
}

export default distanceToBirthday;
