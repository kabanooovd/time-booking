import { Day } from "../Day/Day";
import { onGetDates } from "../utils/onGetDates";
import style from "./Dates.module.css";

export const Dates: React.FC<{
  freeDates: string[];
  chosenDate: string | null;
  setChosenDate: (chosenDate: string) => void;
}> = ({ freeDates, setChosenDate, chosenDate }) => {
  const incomingDates: string[] = onGetDates(15);

  return (
    <div className={style.container}>
      {incomingDates.map((date) => {
        return (
          <Day
            key={date}
            date={date}
            freeDates={freeDates}
            setChosenDate={setChosenDate}
            chosenDate={chosenDate}
          />
        );
      })}
      <button>click</button>
    </div>
  );
};
