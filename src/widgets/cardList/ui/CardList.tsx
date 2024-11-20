"use server";

import { MediaCard } from "@/src/entities/media";

import { mediaApi } from "@/src/shared/api";
import { ResponseOptions } from "@/src/shared/lib";

interface CardListProps {
  path: string;
}

export const CardList = async ({ path }: CardListProps): Promise<JSX.Element> => {
  const response: ResponseOptions = await mediaApi(path);
  const media = response.docs;
  console.log(media);
  return (
    <ul className="flex w-screen gap-x-4 overflow-x-scroll py-3">
      {media.map(({ id, name, poster, rating, year }) => (
        <li key={id} className="hover:scale-105">
          <MediaCard name={name} year={year} rating={rating.kp} posterUrl={poster.url} />
        </li>
      ))}
    </ul>
  );
};
