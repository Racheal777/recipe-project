import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";



const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  

  const { label, image, url, ingredients} = recipe.recipe;


  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
     <button>View Recipe</button> 
      </a>

      
      {/* <FavoriteBorderIcon style={{ fontSize: 40 }}variant="srOnly" onClick={() => setAdd(add)}>Add</FavoriteBorderIcon> */}
      
     
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
   
    </div>
  );
};

export default Recipe;