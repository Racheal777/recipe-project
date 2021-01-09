import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";


const Display =(props)=>{

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    

    // const APP_ID = "01797b84";
    // const APP_KEY= "7b04083469260c0803c24979c75b69fb";	
   
    const url= "https://api.edamam.com/search?q=''&app_id=01797b84&app_key=7b04083469260c0803c24979c75b69fb"

    
    

    
    
const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
     
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      
   
    }
  };

 

  const onClick = e => {
    e.preventDefault();
    getData();
  };

  return (
 
    <div className="App">
      
     <button onClick={onClick}></button>
     {/* <props.name/> */}
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
      </div>

  );
}

export default Display;