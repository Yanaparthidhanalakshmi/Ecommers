import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const MainContent = () => {
    let [state,setState]=useState({data:[]})
    let[search,setsearch]=useState('')
   
    useEffect(()=>{
        let api=fetch("https://fakestoreapi.com/products")
        api.then(x=>x.json()).then(y=>{
            // console.log(state.data);
            setState({data:y})
    })
},[state]);
    let searchval=(e)=>{
         setsearch(e.target.value)
    }
    // console.log(state);
    let navigate=useNavigate()
  return (
    <div>
    <input type="text" onChange={searchval}/>
    <div className="card-container">
    {state.data.filter(x => x.title.toLowerCase().includes(search)).map(x => (
        <div key={x.id} className="card">
            <img src={x.image} alt={x.title}className="card-image" />
            <div className="card-content">
                <h1 className="card-title">{x.title.slice(0,11)}...</h1>
                <b className="card-price">${x.price}</b>
                <h3 className="rating-button">{x.rating.rate}⭐</h3>
                <button onClick={()=>navigate("/product",{state:{x}})}>Buy Now</button>
            </div>
        </div>
        
    ))}
</div>
</div>
  )
}

export default MainContent
