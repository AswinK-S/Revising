import React, { useState } from 'react'
import ChildComponent from './child'

const ParentComponent = ()=>{
    const [dataFromChild,setDataFromChild] = useState(null)

    const handleData =(data)=>{
        setDataFromChild(data)
    }

    return (
        <div>
            <h1>Parent component</h1>
            <ChildComponent onData={handleData}/>
            <p>data from child component:{dataFromChild}</p>
        </div>
    )

}

export default ParentComponent