import React from 'react';


   const Restro = (props)=>{
    return(
<>
  <div className="card">
 <img src={props.Item.url}></img>

 <h2>{props.Item.title}</h2>
 <p>{props.Item.thumbnailUrl}</p>
        
  </div>
        
</>

    );

}


export default Restro;