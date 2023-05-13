import React from "react";

export default function UseEffect(){
     const [count,setCount] = React.useState(0);
     


     console.log("component rendered ")

    React.useEffect(function(){  // ya da böyle React.useEffect( () => {} ) yazilir
      console.log("use effect executed");
    },[count])



    return(
        <>
        <div>
            <h2>The count is {count} </h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> {/** prevCount u biz yazdik */}
        </div>
        </>
    )

}

