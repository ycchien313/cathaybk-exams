import { createContext, useContext } from "react";

export const DatePickerContext = createContext();

export const useDatePickerContext = () => {
  return useContext(DatePickerContext);
};