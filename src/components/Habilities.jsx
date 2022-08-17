import React from 'react'


const Habilities = ({habilities}) => {
  return (
       <div>
        {habilities.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
                 <p>{item.habilities}</p>
                 </div>
          )
        })}
       </div>
    
    
  )
}

export default Habilities
