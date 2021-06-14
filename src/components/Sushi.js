import React, { useState } from "react"

function Sushi({ img_url, name, price, id, spendMoney, handleIsEaten }) {
   const [isEaten, setIsEaten] = useState(false)

   const API = "http://localhost:3001/sushis/"

   const handleEat = value => {
      setIsEaten(true)
      spendMoney(value)
      handleIsEaten(id)

      // fetch(API + id, { method: "DELETE" })
      //    .then(r => r.json())
      //    .then(console.log)
   }

   return (
      <div className="sushi">
         <div className="plate" onClick={isEaten ? null : () => handleEat(price)}>
            {isEaten ? null : <img src={img_url} alt={name} width="100%" />}
         </div>
         <h4 className="sushi-details">
            {name} - ${price}
         </h4>
      </div>
   )
}

export default Sushi
