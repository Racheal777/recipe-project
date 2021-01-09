import React,{useState}from 'react'



function Favorite () {
    const [cart, setCart] = useState([]);

    function handleCart(event) {
        event.preventDefault();
        if (metho === ""&& ingredients === [''])
          setCart(true)
        
      }



    return (
        <div>
            {/* {cart.map((cart) =>) */}
            <h2>Favorites</h2>
            
        </div>
    )
}


export default Favorite