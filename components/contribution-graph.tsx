"use client";
import GitHubCalendar from "react-github-calendar";
import { github } from "@/app/data/contribution-graph-theme";
import { useState} from "react";
import EmptyState from "@/components/ui/empty-state";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );


  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex items-center max-w-fit flex-col gap-4">
      <div className="flex flex-wrap bg-primary-foreground border py-2 dark:border-zinc-800 px-2 border-zinc-200 rounded-lg max-h-full sm:mx-20">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={"light"}
          blockSize={12}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-2">
        {/* Display only the last five years */}
        {/* {years.map((year: number) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))} */}
      </div>
    </div>
  );
}
