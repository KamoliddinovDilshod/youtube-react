import Flora from "../../assets/images/Flora.jpg";
import Violet from "../../assets/images/Violet.jpg";
import Phillip from "../../assets/images/Phillip.jpg";
import "./main.css";
import { NavLink } from "react-router-dom";

const RecomChanell = () => {
  return (
    <div className='chanells'>
      <strong className="channels__title">Recommended channel</strong>
      <ul className='chanells__list'>
        <li className='channels__item'>
          <NavLink className='channel__link' to="/channel">
            <img className='channel__img' src={Flora} alt='Flora Benson' />
            <strong className='channel__title'>Flora Benson</strong>
          </NavLink>
        </li>
        <li className='channels__item'>
          <NavLink className='channel__link' to="/channel">
            <img className='channel__img' src={Violet} alt='Violet Cobb' />
            <strong className='channel__title'>Violet Cobb</strong>
          </NavLink>
        </li>
        <li className='channels__item'>
          <NavLink className='channel__link' to="/channel">
            <img className='channel__img' src={Phillip} alt='Phillip Mullins' />
            <strong className='channel__title'>Phillip Mullins</strong>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecomChanell;
