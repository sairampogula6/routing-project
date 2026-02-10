import "../../components/recipe/Recipe.css"
import data from "../../Recipe_data"
import { useNavigate } from "react-router-dom";

function Recipe(){
    const nav = useNavigate();
    return(
       <div className="App">
        {data.recipes.map((value, index) => (
          <div key={index} className="card" onClick={()=>{nav(`/singleRecipe/${value.id}`)}}
>
            <img src={value.image} alt={value.name}></img>
            <h2>{value.name}</h2>
          </div>
        )
    )}
    </div>  
    );
    }

export default Recipe