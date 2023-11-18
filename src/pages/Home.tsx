import Calendar from "../components/Calendar";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <div className="mx-4">
      <Header />
      <Calendar />
      <Tasks />
    </div>
  );
};

export default Home;
