import React from "react";

const withPropsProxy = (WrappedComponent)=>{
    
    return class extends React.Component{
        render(){
            const modifiedProps ={
                ...this.props,
                newProp:'this is a new prop added by HOC'
            }

            return <WrappedComponent {...modifiedProps}/>
        }
    }
}

export default withPropsProxy