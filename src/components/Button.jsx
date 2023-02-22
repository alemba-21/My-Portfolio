import React from 'react'

const Button = (filter) => {
  return (
    <div className="toggle" defaultValue="Designs">
        <button onClick={()=>filter('ui/ux')}>Designs</button>
        <button>E-Commerce</button>
        <button>API Projects</button>
    </div>
  )
}

export default Button