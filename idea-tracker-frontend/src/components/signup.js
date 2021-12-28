import { useRef } from "react";
import {  useDispatch  } from 'react-redux';

const Signup = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const lastNameInputRef = useRef();
  const firstNameInputRef = useRef();
  const roleInputRef = useRef();

    const dispatch = useDispatch();

  const loginHandler = (event) =>{
    dispatch({ type: "UPDATE_NAV", payload: "LOGIN" });

  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFName = firstNameInputRef.current.value;
    const enteredLName = lastNameInputRef.current.value;
    const enteredRole = roleInputRef.current.value;

    let url = "http://localhost:8080/api/v1/user/register";
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        firstName : enteredFName,
        lastName : enteredLName,
        role : enteredRole
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status)
        if (res.status===201) {
          return "res.json();"
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_LOGIN", payload: false });
        dispatch({ type: "UPDATE_NAV", payload: "LOGIN" });
        console.log("reached")
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={submitHandler}>
      <div>
          <label htmlFor="firstName">Your FirstName</label>
          <input type="text" id="name" required ref={firstNameInputRef} />
        </div>
        <div>
          <label htmlFor="lastName">Your LastName</label>
          <input type="text" id="last" required ref={lastNameInputRef} />
        </div>
        <div>
          <label htmlFor="role">Your Role</label>
          <input type="text" id="role" required ref={roleInputRef} />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button>Signup</button>
          <button type="button" onClick={loginHandler}>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
