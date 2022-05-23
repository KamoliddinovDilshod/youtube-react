import Oval from "../../assets/images/Oval.jpg";
import ReactSimplyCarouselExample from "../../libs/carousel/carousel";
import FoodCarousel from "../../libs/foodcarus/carousel";
import Btn from "../btn/btn";
import "./main.css";

const Food = () => {
  return (
    <>
      <div className='food__box'>
        <div className='food__packet'>
          <img className='food__img' src={Oval} alt='oval' />
          <h3 className='food__title'>Food & Drink</h3>
          <span className='food__span'>Recommended channel for you</span>
          <Btn />
        </div>
        <FoodCarousel
          width='250'
          height='150'
          text='240k views  ·  4 months ago'
          title='Food & Drink'
        />
      </div>
    </>
  );
};

export default Food;
