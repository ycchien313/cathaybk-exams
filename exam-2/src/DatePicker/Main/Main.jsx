import { useDatePickerContext } from "../Provider/useDatePickerContext";
import { CalendarDay } from "./CalendarDay";

export const Main = () => {
  const { calendarDays, onSelectDate } = useDatePickerContext();
  return (
    <div className="grid grid-cols-7 gap-1 p-2">
      {calendarDays.map((props) => (
        <CalendarDay key={props.date} {...props} onSelectDate={onSelectDate} />
      ))}
    </div>
  );
};
