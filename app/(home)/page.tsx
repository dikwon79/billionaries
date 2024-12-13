import Link from "next/link";
import Billionare from "../components/billionare";
import style from "../styles/home.module.css";

export const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionaries() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billions = await getBillionaries();
  return (
    <div className={style.container}>
      {billions.map((billion) => (
        <Billionare
          key={billion.id}
          id={billion.id}
          poster_path={billion.squareImage}
          name={billion.name}
          netWorth={billion.netWorth}
          industries={billion.industries}
        />
      ))}
    </div>
  );
}
