import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../api/index';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const { values, handleInputChange, reset } = useForm({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(values);
    const res = await login(values);
    console.log(res);
  };
  return (
    <div class='wrapper fadeInDown' style={{ marginTop: '10rem' }}>
      <div id='formContent'>
        <h2 class='active'> Sign In </h2>

        <form onSubmit={handleLogin}>
          <input
            type='text'
            id='login'
            class='fadeIn second'
            name='email'
            placeholder='login'
            onChange={handleInputChange}
            value={values.email}
          />
          <input
            type='text'
            id='password'
            class='fadeIn third'
            name='password'
            placeholder='password'
            onChange={handleInputChange}
            value={values.password}
          />
          <input type='submit' class='fadeIn fourth' value='Log In' />
        </form>

        <div id='formFooter'>
          <Link class='underlineHover' to='/register'>
            Crear cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};
