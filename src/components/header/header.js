import { NavLink } from "react-router-dom";
import Btn from "../../assets/images/btn.svg";
import Logo from "../../assets/images/Logo.svg";
import Video from "../../assets/images/Video.svg";
import App from "../../assets/images/app.svg";
import Notification from "../../assets/images/Notification.svg";
import "./main.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__box'>
        <button className='header__btn'>
          <img className='header__btn-img' src={Btn} alt='Button' />
        </button>

        <NavLink className='header__link' to='/'>
          <img className='header__logo' src={Logo} alt='YouTube logo' />
        </NavLink>
        <input className='header__search' type='search' placeholder='Search' />
      </div>
      <div className='header__packet'>
        <button className='header__button'>
          <img src={Video} alt='movie' />
        </button>
        <button className='header__button'>
          <img src={App} alt='app' />
        </button>
        <button className='header__button'>
          <img src={Notification} alt='Notification' />
        </button>
        <button className='header__button'></button>
      </div>
    </header>
  );
};

export default Header;
