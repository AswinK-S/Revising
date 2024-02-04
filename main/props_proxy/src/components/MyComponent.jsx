import React from "react";
import withPropsProxy from "../hocs/withPropsProxy";

const Mycomponent = (props)=>{

    return(
        <div>
            <p>{props.text}</p>
            <p>{props.newProp}</p>
        </div>
    )
}

export default withPropsProxy(Mycomponent)