import { addMonths, getMonth, getYear, subMonths } from "date-fns";
import { useState } from "react";
import React from "react";
import { DatePickerContext } from "./useDatePickerContext";
import { getCalendarDays } from "./helper";

export const DatePickerProvider = ({
  children,
  prevButtonProps,
  onNextMonth,
  onPrevMonth,
  onSelectDate,
  value = new Date(),
}) => {
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
  };

  const handleSelectDate = (newDate) => {
    const isBeforeStart = range.start && newDate < range.start;
    if (isBeforeStart) {
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
    onSelectDate(newDate);
  };

  const context = {
    calendarDays: getCalendarDays(getYear(date), getMonth(date) + 1, range),
    date,
    prevButtonProps,
    clickNextMonth,
    clickPrevMonth,
    handleSelectDate,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};
