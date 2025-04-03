import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  getYear,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { DatePickerContext } from "./useDatePickerContext";

function getCalendarDays(year, month, range) {
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
      isInRange: isInRange(day, range),
      isToday: format(day, "yyyyMMdd") === format(new Date(), "yyyyMMdd"),
    }
  });
  return calendarDays;
}

function isInRange(date, range) {
  if (!range.start && !range.end) return false;
  if (!range.start) return false;

  const start = range.start.getTime();
  if (!range.end) return date.getTime() === start;

  const end = range.end.getTime();
  const currentDate = date.getTime();
  return currentDate >= start && currentDate <= end;
}

export const DatePickerProvider = ({ children, prevButtonProps, onNextMonth, onPrevMonth, onSelectDate, value = new Date() }) => {
  const [date, setDate] = useState(value);
  const [range, setRange] = useState({ start: null, end: null });

  const clickNextMonth = () => {
    const newDate = addMonths(date, 1);
    onNextMonth(newDate);
    setDate(newDate);
  };

  const clickPrevMonth = () => {
    const newDate = subMonths(date, 1);
    onPrevMonth(newDate);
    setDate(newDate);
  }

  const handleSelectDate = (newDate) => {
    onSelectDate(newDate);

    const isInCurrentRange = isInRange(newDate, range);
    if (isInCurrentRange) return;

    const isSameDate = format(newDate, "yyyyMMdd") === format(date, "yyyyMMdd");
    if (isSameDate) {
      setRange({ start: null, end: null });
      return;
    }

    if (!range.start) {
      setRange({ ...range, start: newDate });
    } else if (!range.end) {
      setRange({ ...range, end: newDate });
    } else {
      setRange({ start: newDate, end: null });
    }
  }

  const context = {
    calendarDays: getCalendarDays(getYear(date), getMonth(date) + 1, range),
    date,
    prevButtonProps,
    onNextMonth: clickNextMonth,
    onPrevMonth: clickPrevMonth,
    onSelectDate: handleSelectDate,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};
