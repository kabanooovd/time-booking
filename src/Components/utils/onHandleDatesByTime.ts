export const onHandleDatesByTime = (freeDates: string[]) => {
  return freeDates.reduce((acc: Record<string, string[]>, date: string) => {
    if (acc[onFormatDate(date)]) {
      acc[onFormatDate(date)] = [
        ...acc[onFormatDate(date)],
        date,
      ];
    } else {
      acc[onFormatDate(date)] = [date];
    }
    return acc;
  }, {});
};

export const onFormatDate = (date: string) => date.split("T", 1)[0];
export const onFormatTime = (date: string) =>
  date.split("T", 2)[1].split(".")[0];
