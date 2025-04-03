import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

function isInRange(date, range) {
  if (!range.start || !range.end) return false;
  const start = range.start.getTime();
  const end = range.end.getTime();
  const currentDate = date.getTime();
  return currentDate >= start && currentDate <= end;
}

export function getCalendarDays(year, month, range) {
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  const startDate = startOfWeek(firstDayOfMonth);
  const endDate = endOfWeek(lastDayOfMonth);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const calendarDays = days.map((day) => {
    return {
      date: day,
      day: parseInt(format(day, "d")),
      isCurrentMonth: getMonth(day) === month - 1,
      isStartDate: format(day, "yyyyMMdd") === format(range.start, "yyyyMMdd"),
      isEndDate: format(day, "yyyyMMdd") === format(range.end, "yyyyMMdd"),
      isInRange: isInRange(day, range),
      isToday: format(day, "yyyyMMdd") === format(new Date(), "yyyyMMdd"),
    };
  });
  return calendarDays;
}
