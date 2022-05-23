import Img from "../../assets/images/Gussiebig.jpg";
import ReactSimplyCarouselExample from "../../libs/carousel/carousel";
import "./main.css";

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog__box'>
        <img className='blog__img' src={Img} alt='Dollie Blair' />
        <h3 className='blog__title'>Dollie Blair</h3>
      </div>
      <ReactSimplyCarouselExample text="80k views · 3 days ago" title="Gussie French" width="240" height="150"/>
    </div>
  );
};

export default Blog;
