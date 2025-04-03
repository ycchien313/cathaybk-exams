import { format } from "date-fns";
import React from "react";
import { useDatePickerContext } from "../Provider/useDatePickerContext";

const BUTTON_CLASSES = "w-[44px] h-[44px] hover:bg-[#e6e6e6] cursor-pointer";

export const Header = () => {
  const { date, prevButtonProps, clickNextMonth, clickPrevMonth } =
    useDatePickerContext();

  return (
    <div className="w-full h-[44px] mb-[16px] flex items-center justify-between">
      <button
        className={BUTTON_CLASSES}
        onClick={clickPrevMonth}
        {...prevButtonProps}
      >
        &lt;
      </button>
      <h2 className="text-lg font-semibold">{format(date, "yyyy年M月")}</h2>
      <button className={BUTTON_CLASSES} onClick={clickNextMonth}>
        &gt;
      </button>
    </div>
  );
};
