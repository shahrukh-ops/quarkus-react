import logo from './logo.svg';
import react from "react";
import './App.css';
import Login from "./components/login"
import Signup from "./components/signup"
import Ideas from "./components/ideas"
import { useSelector, useDispatch  } from 'react-redux';

function App() {

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const navigateTo = useSelector(state => state.navigateTo);
    const dispatch = useDispatch();


    return (
        <>
        {!isLoggedIn &&  navigateTo=== "LOGIN" &&<Login parentDispatch={dispatch}></Login>}
        {!isLoggedIn && navigateTo==="CREATE_USER" && <Signup />}
        {isLoggedIn && navigateTo==="LIST_IDEAS" && <Ideas />}
        </>

    );

}

export default App;