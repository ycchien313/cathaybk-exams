import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { DatePickerProvider } from "./Provider/Provider";

export const DatePicker = (props) => {
  return (
    <div className="w-[350px]">
      <DatePickerProvider {...props}>
        <Header />
        <Main />
      </DatePickerProvider>
    </div>
  );
};
