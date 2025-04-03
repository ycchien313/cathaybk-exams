import React from "react";

const COLOR_SCHEMA = {
  default: {
    bg: "bg-inherit",
    text: "text-inherit",
    hover: "hover:bg-[#e6e6e6]",
  },
  today: {
    bg: "bg-[#ffff76]",
  },
  inRange: {
    bg: "bg-[#006edc]",
    text: "text-[#fff]",
    hover: "hover:bg-[#006edc]",
  },
};

function getColorClasses(isToday, isInRange) {
  const scheme = {
    ...COLOR_SCHEMA.default,
    ...(isToday && COLOR_SCHEMA.today),
    ...(isInRange && COLOR_SCHEMA.inRange),
  };
  return `${scheme.bg} ${scheme.text} ${scheme.hover}`;
}

export const CalendarDay = ({
  date,
  day,
  isCurrentMonth,
  isStartDate,
  isInRange,
  isToday,
  onSelectDate,
}) => {
  const isInCurrentRange = isInRange || isStartDate;
  return (
    <button
      key={date}
      className={`
        w-[50px] h-[36px]
        ${getColorClasses(isToday, isInCurrentRange)}`}
      disabled={!isCurrentMonth}
      onClick={() => onSelectDate(date)}
    >
      {day}日
    </button>
  );
};
