import React, { useEffect } from 'react';
import {listIdeas} from "../services/services";
import { useSelector, useDispatch } from 'react-redux';

const Ideas = (props) => {

  const dispatch = useDispatch();
  const ideas = useSelector((state) => state.ideas);

 
  useEffect(async () => {
    let res = await (await listIdeas()).json();
    console.log(res)
    dispatch({ type: "SET_IDEA", payload: res });
  }, []);
console.log(ideas);

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
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
    </tr>
  })}</table>}
    <button>Add an Idea</button>
    </>
    );

}

export default Ideas;