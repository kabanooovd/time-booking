import { onFormatDate, onFormatTime } from "../utils/onHandleDatesByTime";
import style from "./Times.module.css";

export const Times: React.FC<{
  times: string[] | null;
  chosenDate: string | null;
  setChosenDateTime: (chosenDateTime: string | null) => void;
}> = ({ times, chosenDate, setChosenDateTime }) => {
  const formatedChosenDate = chosenDate
    ? new Date(onFormatDate(chosenDate)).toLocaleDateString("ru")
    : null;
  const title =
    chosenDate && times
      ? `Выберите время приема на ${formatedChosenDate}`
      : "Выберите день приема";
  const onHandleTime = (time: string): string => {
    const hrs = time.split(":")[0];
    if (+hrs > 9) {
      return time.substring(0, time.length - 3);
    } else {
      return time.substring(1, time.length - 3);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.title__wrapper}>
        <span>{title}</span>
      </div>
      {times && (
        <div className={style.times__wrapper}>
          {times.map((time, idx) => {
            const onChoseDateTimeHandler = () => {
            //   console.log(time);
            time && setChosenDateTime(time)
            };
            return (
              <button key={time + `${idx}`} onClick={onChoseDateTimeHandler}>
                {onHandleTime(onFormatTime(time))}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
