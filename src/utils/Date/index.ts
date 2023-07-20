import dayjs from "dayjs";

export const getYear = (dateString: string) => {
  return dayjs(dateString).year();
};
