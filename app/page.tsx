import { MediaCard } from "@/src/entities/media";
import { CardList } from "@/src/widgets/cardList";

const Home = () => {
  return (
    <main className="flex items-start">
      <CardList path="movie?page=1&limit=10&notNullFields=id&notNullFields=name&notNullFields=poster.url&sortField=rating.kp&sortType=1&lists=popular-films" />
    </main>
  );
};

export default Home;
