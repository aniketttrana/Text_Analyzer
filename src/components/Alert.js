import React from 'react'

export default function Alert(props) {
  return (
    // Alert in bootstrap
   props.alert && <div><div className="alert alert-info {props.alert.type}" role="alert">
   <strong>{props.alert.type}</strong>:{props.alert.msg}
  </div></div>
  )
}
