import React, { Fragment, useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  /* Put comment to use useState */
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  /* Remove comment to use useState */
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    /* Put comment to use useState */
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    /*Use variables given in useState to use this state  */
    if (enteredName.trim() === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    /*Use variables given in useState to use this state  */
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)',
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    /* Only use this for resetting value entered by user */
    /* Put comment to use useState */
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    /* Remove comment to use useState */
    // Since we are using useRef we no longer needed to reset inputs
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  /* Remove comment to use useState */
  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  /* Remove comment to use useState */
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            /* Remove comment to use useState */
            // value={enteredUsername}
            // onChange={usernameChangeHandler}

            /* Put comment to use useState */
            ref={nameInputRef}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            /* Remove comment to use useState */
            // value={enteredAge}
            // onChange={ageChangeHandler}

            /* Put comment to use useState */
            ref={ageInputRef}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
