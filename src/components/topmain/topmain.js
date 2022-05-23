import Fish from "../../assets/images/fish.jpg";
import "./main.css"

const TopMain = () => {
  return (
    <div className="main__basic">
      <img className="top__subimg"
        src={Fish}
        alt='Choosing The Best Audio Player Software For Your Computer' width="540px" 
      />
      <div className='main__box'>
        <div className='main__subbox'>
          <h3 className="main__title">Choosing The Best Audio Player Software For Your Computer</h3>
        </div>
        <div className='main__textbox'>
          <p className="main__text">
            Your cheap internet-based banner advertising will become one of the
            sought for ads there are. Today, the world of Internet advertising
            is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles
            A common medium for advertising on the Internet is the use of banner
            ads.
          </p>
        </div>
        <time className="main__time">11k views · 6 months ago</time>
      </div>
    </div>
  );
};

export default TopMain;
