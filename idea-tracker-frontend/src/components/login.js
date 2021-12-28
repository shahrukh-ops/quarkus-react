import { useRef } from "react";
import { useDispatch  } from 'react-redux';

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  
    const dispatch = useDispatch();

  const handleCreate = (event) =>{
    dispatch({ type: "UPDATE_NAV", payload: "CREATE_USER" });

  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url = "http://localhost:8080/api/v1/user/login";
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_LOGIN", payload: true });
        dispatch({ type: "UPDATE_NAV", payload: "LIST_IDEAS" });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
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
          <button>Login</button>
          <button type="button" onClick={handleCreate}>Create Account</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
