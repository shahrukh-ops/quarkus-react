import React, { useState} from 'react';
import {addIdea,updateIdea} from "../services/services";
import { useSelector, useDispatch } from 'react-redux';

const IdeaForm = (props) => {

  const accessToken = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();
  const ideaToUpdate = useSelector((state) => state.ideaToUpdate);

  const [idea,setIdea] = useState({
    name:ideaToUpdate?.name,
    description:ideaToUpdate?.description,
    submitDate:ideaToUpdate?.submitDate,
    completionTargetDate:ideaToUpdate?.completionTargetDate
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
    if(props.create){
    await addIdea(accessToken,idea);
    }
    else {
      await updateIdea(accessToken,{...idea,id:ideaToUpdate.id})
    }
    dispatch({ type: "SET_IDEA_TO_UPDATE", payload: ""});
    dispatch({ type: "UPDATE_NAV", payload: "LIST_IDEAS" }); 
    
   
  }

  return (
<>
      <h1>{props.create ? "Add The Idea": "Update The Idea"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Idea Name</label>
          <input type="text" defaultValue={idea?.name} onChange={nameInputHandler} />
        </div>
        <div>
        <label>Idea Description</label>
        <input type="text" defaultValue={idea?.description}  onChange={descriptionInputHandler}/>
        </div>
        <div>
        <label>Idea Submition Date</label>
        <input type='date' min='2020-01-01' max='2024-12-31' defaultValue ={idea?.submitDate} onChange={submitDateHandler}/>
        </div>
        <div>
        <label>Idea Target Completion Date</label>
        <input type='date' min='2020-01-01' max='2024-12-31' defaultValue ={idea?.completionTargetDate} onChange={completionTargetDateHandler}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>

  );
  
}

export default IdeaForm;