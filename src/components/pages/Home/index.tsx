import "./style.scss";
import HomeHeader from "./HomeHeader";
import FilmList from "./FilmList";

const Home = () => {
  return (
    <section className="home-container mb-12">
      <HomeHeader />

      <div className="mt-6">
        <FilmList />
      </div>
    </section>
  );
};

export default Home;
