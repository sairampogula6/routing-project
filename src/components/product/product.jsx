import "../../components/product/product.css"
import data1 from "../../product_data"
import { useNavigate } from "react-router-dom";

function Product(){
    const nav = useNavigate();
    return(
       <div className="App">
        {data1.products.map((value, index) => (
          <div key={index} className="card" onClick={()=>{nav(`/Product/${value.id}`)}}
>
            <img src={value.thumbnail} alt={value.title}></img>
            <h2>{value.title}</h2>
          </div>
        )
    )}
    </div>  
    );
    }

export default Product