import React from 'react'
import { useState ,useEffect} from 'react';
 import {data} from './config';
 import Restro from './Restro';

 import Shimmer from './Shimmer';




function Body(){



  const [isSearch,setIsSearch]=useState(false);
   const [Value,setValue]=useState("");
    const [Obj,setObj]=useState([]);
   const [filObj,setFilObj]=useState([]);

   function setChange (val,obj){

     const tempArray = obj.filter((temp)=>temp.title.includes(val)); 

        return tempArray;
   }

  useEffect(async()=>{

    console.log("UseEffect");
    const data2 = await(await fetch("https://jsonplaceholder.typicode.com/photos")).json();
    console.log(data2);
    setObj(data2);
    setFilObj(data2);
  },[])
 
  console.log("Render")


    return  Obj?.length ===0 ? (
      <>
      <Shimmer/>
      </>
    ) :  (
        <>
     <div className='search-container'>
     <input type='text' placeholder='search' value={Value} onChange={(e)=>{

      setValue(e.target.value);
      const data2=setChange(Value,Obj);
         console.log(data2);
         setFilObj(data2);
  
     }}></input>
     <button  onClick={()=>{


         const data2=setChange(Value,Obj);
         console.log(data2);
         setFilObj(data2);
     }}
     
     >Search</button>
      </div>

{filObj.length==0 ? <h1>what you searched is not found Rakesh Kurma !!</h1> : 
        <div className='Restro'>
          {
            filObj.map(res => {
                return <Restro Item={res} />
            })
        }
        </div>
        }
        
        
        
        </>

    );
    

}
export default Body;