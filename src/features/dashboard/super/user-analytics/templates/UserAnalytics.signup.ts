import { User } from "@prisma/client";

export function getPastWeekDates() {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
  const oneWeekAgo = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);

  const dates = [];

  while (oneWeekAgo <= tomorrow) {
    const dateString = oneWeekAgo.toISOString().split("T")[0];
    dates.push({ date: dateString });
    oneWeekAgo.setDate(oneWeekAgo.getDate() + 1);
  }

  return dates.reverse();
}

export const formatChartData = ({
  dates,
  users
}: {
  dates: { date: string }[];
  users?: Omit<User, "password">[];
}) => {
  const resultMap = new Map();
  dates.forEach((date) => resultMap.set(date.date, 0));

  users?.forEach((user) =>
    resultMap.forEach(
      (value, key, map) =>
        user.created_at.toISOString().split("T")[0] === key && map.set(key, value + 1)
    )
  );

  const finalResult: { date: string; signups: number }[] = [];
  resultMap.forEach((value, key) => finalResult.push({ date: key, signups: value }));

  return finalResult.reverse();
};
