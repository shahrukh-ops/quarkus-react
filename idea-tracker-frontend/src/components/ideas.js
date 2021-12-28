import React, { useEffect } from 'react';
import {listIdeas,deleteIdea} from "../services/services";
import { useSelector, useDispatch } from 'react-redux';

const Ideas = (props) => {

  const dispatch = useDispatch();
  const ideas = useSelector((state) => state.ideas);
  const nav = useSelector((state) => state.navigateTo);
  const accessToken = useSelector((state) => state.accessToken);

 
  useEffect(async () => {
    let res = await (await listIdeas()).json();
    dispatch({ type: "SET_IDEA", payload: res });
  }, [nav]);
 
   const handleDelete = async (event) =>{
     alert("Are you sure you want to delete this idea")
     await deleteIdea(accessToken,event.target.value);
     let remainingIdeas = ideas.filter(idea =>{
       return idea.id != event.target.value;
     })
     dispatch({ type: "SET_IDEA", payload: remainingIdeas });
      
   }

   const addClickHandler = (event) =>{
    dispatch({ type: "UPDATE_NAV", payload: "ADD_IDEA" });
   }

   const updateClickHandler = (event) =>{
    dispatch({ type: "UPDATE_NAV", payload: "UPDATE_IDEA" });
   }

    return ( 
    <><h2>The List Of Ideas</h2>
    {ideas && <table>
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>DESCRIPTION</th>
    <th>SUBMIT DATE</th>
    <th>COMPLETION TARGET DATE</th>
    <th>UPDATE</th>
    <th>DELETE</th>
  </tr>
  {ideas.map((idea)=>{
    return <tr>
    <td>{idea.id}</td>
    <td>{idea.name}</td>
    <td>{idea.description}</td>
    <td>{idea.submitDate}</td>
    <td>{idea.completionTargetDate}</td>
    <td><button value={idea.id} onClick={updateClickHandler}>Update</button></td>
    <td><button value={idea.id} onClick={handleDelete}>Delete</button></td>
    </tr>
  })}</table>}
    <button onClick={addClickHandler}>Add an Idea</button>
    </>
    );

}

export default Ideas;