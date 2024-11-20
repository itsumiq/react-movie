import Image from "next/image";
import Link from "next/link";

interface MediaCardProps {
  id: number;
  name: string;
  posterUrl: string;
  rating: number;
  year: number;
}

export const MediaCard = ({ name, rating, year, posterUrl }: MediaCardProps): JSX.Element => {
  return (
    <Link className="flex w-[19.938rem] flex-col" href="/">
      <div className="relative h-[26.875rem] w-full">
        <img
          src={posterUrl}
          alt={name}
          className="h-[26.875rem] w-[19.938rem] rounded-[0.25rem]"
        ></img>
      </div>
      <h5>{name}</h5>
      <p className="text-sm font-normal text-neutral-300">{year} год</p>
    </Link>
  );
};
