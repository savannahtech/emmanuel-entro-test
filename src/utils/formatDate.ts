export function formatDateTime(dateString: string | Date) {
  const date = new Date(dateString);

  const day = date.getDate(); // get day of the month
  const month = date.toLocaleString("default", { month: "short" }); // get short name of month
  const year = date.getFullYear().toString().substr(-2); // get last two digits of year
  const hours = date.getHours(); // get hours
  const minutes = ("0" + date.getMinutes()).slice(-2); // get minutes and pad with zero if needed

  const formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}`;
  return formattedDate;
}
