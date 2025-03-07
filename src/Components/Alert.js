import React from 'react'

const Alert = (props) => {
  const capitalize = (word) => {
    if (word) {
      if(word==="danger"){
        word="error"
      }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return ''; // Return empty string if word is undefined or null
}


  return (
 
   props.alert && <div className={`p-1 m-0 alert alert-${props.alert.type}  alert-dismissible show`} role="alert">
 <strong> { capitalize (props.alert.type)}</strong>: {props.alert.msg}
 
</div>
   
  )
}

export default Alert