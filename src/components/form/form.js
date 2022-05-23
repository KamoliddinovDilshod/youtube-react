import React from "react";
import { Context } from "../../context/login";
import "./main.css"

const Form = () => {
  const {setToken } = React.useContext(Context);

  const Submits = (evt) => {
    evt.preventDefault();

    setToken({
      username: evt.target.elements.username.value,
      password: evt.target.elements.password.value,
    });
  };

  return (
    <form onSubmit={Submits} className='form'>
      <div>
        <input
          className='form from-input'
          type='text'
          name='username'
          placeholder='username' required
        />
      </div>
      <div>
        <input
          className='form from-input'
          type='password'
          name='password'
          placeholder='password' required
        />
      </div>

      <button className='form__button' type='submit'>
        Send
      </button>
    </form>
  );
};

export default Form;
