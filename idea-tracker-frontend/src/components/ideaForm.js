import React, { useState} from 'react';
import {addIdea} from "../services/services";
import { useSelector, useDispatch } from 'react-redux';

const IdeaForm = (props) => {

  const accessToken = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();

  const [idea,setIdea] = useState({
    name:"",
    description:"",
    submitDate:"",
    completionTargetDate:""
  });

  const nameInputHandler = (event)=>{

    setIdea((prevState) => {
      return { ...prevState, name: event.target.value };
    });

  }
  const descriptionInputHandler = (event)=>{
    setIdea((prevState) => {
      return { ...prevState, description: event.target.value };
    });

  }
  
  const submitDateHandler = (event)=>{
    setIdea((prevState) => {
      return { ...prevState, submitDate: event.target.value };
    });

  }
  
  const completionTargetDateHandler = (event)=>{
    setIdea((prevState) => {
      return { ...prevState, completionTargetDate: event.target.value };
    });

  }
  

  const submitHandler = async (event)=>{
    event.preventDefault();
    await addIdea(accessToken,idea);
    dispatch({ type: "UPDATE_NAV", payload: "LIST_IDEAS" }); 
   
  }

  return (
<>
      <h1>{props.create ? "Add The Idea": "Update The Idea"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Idea Name</label>
          <input type="text" value={props.idea?.name} onChange={nameInputHandler} />
        </div>
        <div>
        <label>Idea Description</label>
        <input type="text" value={props.idea?.description}  onChange={descriptionInputHandler}/>
        </div>
        <div>
        <label>Idea Submition Date</label>
        <input type='date' min='2020-01-01' max='2024-12-31' value ={props.idea?.submitDate} onChange={submitDateHandler}/>
        </div>
        <div>
        <label>Idea Target Completion Date</label>
        <input type='date' min='2020-01-01' max='2024-12-31' value ={props.idea?.completionTargetDate} onChange={completionTargetDateHandler}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>

  );
  
}

export default IdeaForm;