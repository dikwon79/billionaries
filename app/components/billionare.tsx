import Link from "next/link";
import style from "../styles/billionare.module.css";

interface IBillionaireProps {
  name: string;
  id: string;
  poster_path: string;
  netWorth: number;
  industries: string[];
}

export default function Billionare({
  name,
  id,
  poster_path,
  netWorth,
  industries,
}: IBillionaireProps) {
  return (
    <div className={style.billion}>
      <img src={poster_path} alt={name} />
      <div className={style.textContainer}>
        <Link href={`/person/${id}`}>{name}</Link>
        <h2>{`${Math.floor(netWorth / 1000)} billion / ${industries}`}</h2>
      </div>
    </div>
  );
}
