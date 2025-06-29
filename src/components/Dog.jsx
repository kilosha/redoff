import React from 'react'

const Dog = ({dogImg}) => {
  return (
    <div style={{margin: "10px"}}>
      <img src={dogImg} style={{width: "300px"}}/>
    </div>
  )
}

export default Dog