import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const Profile =()=>{

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

  //   const [cart, setCart] = useState([]);
  
  // const addToCart = (recipes) => {
  //   console.log('we are in cart')
  //   setCart({...cart, recipes});
  // }
   
    const APP_ID = "01797b84";
    const APP_KEY= "7b04083469260c0803c24979c75b69fb";	
    const url=  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    
    

    
    
const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (

<div className='header'>

     
    <div className="App">

   
    
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}

        <h3>Find Recipe</h3>
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
       
        <input type="submit" value="Search" />
      </form>
     
      </div>
     
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
           {/* <button onClick ={() => addToCart(recipes)}>{FavoriteBorderIcon}</button> */}
          
      </div>
      
    </div>
  );
}


export default Profile
