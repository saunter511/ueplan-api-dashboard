import { FC } from "react";

import { BsPerson, BsPersonBadge } from "react-icons/bs";

interface IStatsProps {
  total: number;
  unique: number;
  daily: any;
}

export const Stats: FC<IStatsProps> = ({ total, unique, daily }) => {
  console.log(daily);
  return (
    <div className=" flex xl:flex-nowrap sm:w-full sm:grid-flow-row flex-wrap shadow stats">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Użyć ogółem</div>
        <div className="stat-value text-primary">{total}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Unikalni użytkownicy</div>
        <div className="stat-value text-info">{unique}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-warning">
          <BsPerson className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Użytkownicy dziś</div>
        <div className="stat-value text-warning">{daily.today.length}</div>
        {daily.yesterday.length - daily.today.length < 0 ? (
          <div className="stat-desc text-success">
            ↗︎ {(daily.yesterday.length - daily.today.length) * -1} więcej niż
            wczoraj
          </div>
        ) : (
          <div className="stat-desc text-error">
            ↘︎ {daily.yesterday.length - daily.today.length} mniej niż wczoraj
          </div>
        )}
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <BsPersonBadge className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Unikalni użytkownicy dziś</div>
        <div className="stat-value text-secondary ">
          {daily.todayUnique.length}
        </div>
        {daily.yesterdayUnique.length - daily.todayUnique.length < 0 ? (
          <div className="stat-desc text-success">
            ↗︎ {(daily.yesterdayUnique.length - daily.todayUnique.length) * -1}{" "}
            więcej niż wczoraj
          </div>
        ) : (
          <div className="stat-desc text-error">
            ↘︎ {daily.yesterdayUnique.length - daily.todayUnique.length} mniej
            niż wczoraj
          </div>
        )}
      </div>
    </div>
  );
};
