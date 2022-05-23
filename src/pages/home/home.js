import Blog from "../../components/blog/blog";
import Food from "../../components/food/food";
import Header from "../../components/header/header";
import NavFunc from "../../components/nav/nav";
import Recom from "../../components/recommended/recommended";
import "./main.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className='packet'>
        <NavFunc />
        <Blog />
        <Recom/>
        <Food/>
      </div>
    </>
  );
};

export default Home;
