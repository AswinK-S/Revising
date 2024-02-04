import React from 'react'

const ChildComponent = ({onData})=>{

    const sendDataToParent = ()=>{
        const dataToSend ='hello from child'
        onData(dataToSend)
    }

    return(
        <div>
            <h1>child component</h1>
            <button onClick={sendDataToParent}>send data to parent</button>
        </div>
    )
}

export default ChildComponent