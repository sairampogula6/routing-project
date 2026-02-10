
import data from '../../Recipe_data'
import { useParams } from 'react-router-dom'
import "../singleRecipe/singleRecipe.css"
import Navbar from '../navbar/navbar'
function SingleRecipe() {
    <Navbar/>
   const queryParms =useParams()
    const Recipe=data.recipes.filter(x=>x.id == Number(queryParms.id))
    let item=Recipe[0]
  return (
    
    <div className="recipe-page">
      <div className="recipe-card">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>

        <div className="recipe-info">
          <p><span>Rating:</span> {item.rating}</p>
          <p><span>Cuisine:</span> {item.cuisine}</p>
          <p><span>Meal Type:</span> {item.mealType}</p>
          <p className="ingredients">
            <span>Ingredients:</span> {item.ingredients}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleRecipe





