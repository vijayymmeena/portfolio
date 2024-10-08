"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubCalendarView() {
  if (!process.env.NEXT_PUBLIC_GITHUB_USERNAME) {
    throw Error("env NEXT_PUBLIC_GITHUB_USERNAME does not exist");
  }

  return (
    <GitHubCalendar
      username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
      hideColorLegend
      hideMonthLabels
    />
  );
}
