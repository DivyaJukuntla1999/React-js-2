import React, {useState} from "react";
//import './AddUser.css'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title : 'Invalid Input',
        message : 'Please enter a valid name and age (non-empty value)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ",
      });
      return ;
    }
    props.onAddUser(enteredUsername, enteredAge)
    console.log(enteredUsername,enteredAge)
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

    return (
       <Wrapper> 
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username :</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years):</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </Wrapper>

    );
  }

  export default AddUser;





//   return (
//     <form onSubmit={addUserHandler}>
//       <div>
//         <div>
//           <label>Username</label>
//           <input type="text" onChange={usernameChangeHandler} />
//         </div>
//         <div>
//           <label>Age</label>
//           <input type="number" onChange={ageChangeHandler} />
//         </div>
//         <button type="submit">Add Details </button>
//       </div>
//     </form>
//   );
// }  //The one i tried