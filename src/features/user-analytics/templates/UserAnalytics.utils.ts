export const formatSignupData = ({ users }: { users?: { createdAt: Date }[] }) => {
  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const getDateRange = () => {
    const dayMS = 1 * 24 * 60 * 60 * 1000;

    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 6 * dayMS);

    const dates = [];

    while (oneWeekAgo <= today) {
      dates.push(formatDate(oneWeekAgo));
      oneWeekAgo.setDate(oneWeekAgo.getDate() + 1);
    }

    return dates.reverse();
  };

  const getUserSignups = () => {
    return users?.map((user) => formatDate(user.createdAt));
  };

  const getWeeklySignupAnalytics = () => {
    const result = new Map();

    getDateRange().forEach((date) => result.set(date, 0));

    getUserSignups()?.forEach((signupDate) =>
      result.forEach((value, key, map) => signupDate === key && map.set(key, value + 1))
    );

    return result;
  };

  const getChartData = () => {
    const chartData: { date: string; signups: number }[] = [];

    getWeeklySignupAnalytics().forEach((value, key) =>
      chartData.push({ date: key, signups: value })
    );

    return chartData.reverse();
  };

  return getChartData();
};
