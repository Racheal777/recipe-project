import React,{ useState} from 'react'



function AddRecipeProvider  (props) {
    
    const[done, setDone]= useState ([''])
    const [ingredients, setIngredients] = useState ([''])
    const [method, setMethod] = useState ('')
    const[recipe,setRecipe]= useState([])
  
    

    const handleIngredientsInput =(event) => {
        setIngredients(event.target.value)
      }
      const handleMethodInput =(event) => {
        setMethod(event.target.value)
      }
   

      const getDone =  () => {
        if (method === ""&& ingredients === [''])
          setDone(done)
        
      }

     
      const onClick = e => {
        e.preventDefault();
        getDone();
      };
    
      
    
    return(
        

                 <div className='add-app'> 
        
                         <h2>Create something new</h2>
            
                 
                     <form>

                     <input type ='text'  placeholder = 'Title'/> 
                     <input type ='text'  placeholder = 'Tell us about your recipe- who inspired it, why is it special'style={{resize: 'vertical'}}/> 

                     <label for="time">Cook time</label>

                     <input type ='text'  placeholder = '1hr 30mins'/> 

                     <label for="ingredients">Ingredients</label>
                     <input type ='text' value={ingredients} onChange= {handleIngredientsInput} placeholder = ' '  />  


                     <label for="method">Method</label>
                     <input type ='text' value={method} onChange= {handleMethodInput} placeholder = ' ' style={{height:"100px",resize: 'vertical'}} />  
                    
                      
                    
                     <button onSubmit={onClick}> {props.children}AddRecipe </button>

                         
                         </form>
                </div>  
        

    )
}


export default AddRecipeProvider