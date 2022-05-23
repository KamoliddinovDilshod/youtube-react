import ReactSimplyCarouselExample from "../../libs/carousel/carousel";
import "./main.css";

const Recom = () => {

  const path = "/channel"

  return (
    <section className='section'>
      <div className=''>
        <h3 className='section__title'>Recommended</h3>
        <ReactSimplyCarouselExample link={path} text="34k views  ·  5 months ago" title="Gussie French" width="260" height="150" />
      </div>
    </section>
  );
};

export default Recom;
