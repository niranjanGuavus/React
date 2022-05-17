import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

function emailReducer(state, action){
  if(action.type === 'EMAIL_INPUT') {
    return {val: action.payload.value, isValid: action.payload.isValid = action.payload.value.includes('@')};
  }

  return {val: '', isValid: false};
}

function passwordReducer(state, action){
  if(action.type === 'PASS_INPUT') {
    return {val: action.payload.value, isValid: action.payload.isValid = action.payload.value.trim().length > 6};
  }

  return {val: '', isValid: false};
}

const Login = (props) => {


  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, emailDispatcher] = useReducer(emailReducer, {val:'', isValid:true});
  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, {val:'', isValid:true});


  useEffect(() => { 
    //setFormIsValid(emailState.isValid && passwordState.isValid);
    let trigger = setTimeout(() => {
      console.log('Enter into UseEffect')
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () =>{
      console.log("debounce trigger")
      clearTimeout(trigger)
    }
  },[emailState.isValid, passwordState.isValid]);


  const emailChangeHandler = (event) => {
    emailDispatcher({type: 'EMAIL_INPUT', payload:{value: event.target.value, isValid: event.target.value.includes('@')}});
  };

  const passwordChangeHandler = (event) => {
    passwordDispatcher({type: 'PASS_INPUT', payload:{value: event.target.value, isValid: event.target.value.trim().length > 6}});
  };


  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
