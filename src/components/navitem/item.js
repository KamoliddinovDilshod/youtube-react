import { NavLink } from "react-router-dom";

const Item = ({ img, title }) => {
  return (
    <>
      <li className="list__item">
        <NavLink className="list__link" to="/channel">
          <img className="list__img" src={img} alt={title} />
          <strong className="list__title">{title}</strong>
        </NavLink>
      </li>
    </>
  );
};

export default Item;
