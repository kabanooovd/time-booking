import React from "react";
import { MONTHS, WEEK_DAYS } from "../utils/datesMappers";
import { onCheckFreeDates } from "../utils/onCheckFreeDates";
import style from "./Day.module.css";
import { onFormatDate } from "../utils/onHandleDatesByTime";

export const Day: React.FC<{
  date: string;
  freeDates: string[];
  chosenDate: string | null;
  setChosenDate: (chosenDate: string) => void;
}> = ({ date, freeDates, setChosenDate, chosenDate }) => {
  const incomingDate = new Date(date);
  const day = incomingDate.getDate();
  const weekDay: number = incomingDate.getDay();
  const month = incomingDate.getMonth() + 1;
  const isEnabledDate = onCheckFreeDates(date, freeDates);

  const onDayClickHandler = () => {
    setChosenDate(date);
  };

  const enabledDayStyles =
    chosenDate && onFormatDate(chosenDate) === onFormatDate(date)
      ? style.chosen_day_enabled__container
      : style.day_enabled__container;

  const containerStyles = isEnabledDate
    ? enabledDayStyles
    : style.day_disabled__container;

  return (
    <button
      className={containerStyles}
      disabled={!isEnabledDate}
      onClick={onDayClickHandler}
    >
      <span className={style.enabled_month}>{MONTHS[month]}</span>
      <span className={style.enabled_week_day}>{WEEK_DAYS[weekDay]}</span>
      <span className={style.enabled_month_day}>{day}</span>
    </button>
  );
};
