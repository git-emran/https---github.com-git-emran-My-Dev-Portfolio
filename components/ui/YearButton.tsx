import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "bg-secondary dark:hover:border-transparent dark:text-zinc-800 text-black hover:border-transparent"
          : "dark:bg-primary-bg  dark:text-white text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
