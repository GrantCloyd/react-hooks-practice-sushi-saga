import React, { useState, useEffect } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushi, spendMoney, isBroke, money, handleIsEaten }) {
   const [displaySushi, setDisplaySushi] = useState(sushi)
   const [count, setCount] = useState(0)

   let currentSushi = displaySushi
      .slice(0, 4)
      .map(sushi => (
         <Sushi key={sushi.id} {...sushi} spendMoney={spendMoney} handleIsEaten={handleIsEaten} />
      ))

   const handleAddSushi = () => {
      setCount(count + 1)
      let sushiUpdate = [...sushi].slice(count, count + 4)
      console.log(sushiUpdate.length)
      if (sushiUpdate.length < 4) {
         setCount(0)
         setDisplaySushi(sushi)
      }
      setDisplaySushi(sushiUpdate)
   }

   return (
      <div className="belt">
         {isBroke ? (
            <h3>
               Nothing to see here. Come back when you have more money. <br />
               {money < 0
                  ? `AND you owe us $${money * -1}!! I hope you like scrubbing dishes!`
                  : null}
            </h3>
         ) : (
            currentSushi
         )}
         <MoreButton handleAddSushi={handleAddSushi} />
      </div>
   )
}

export default SushiContainer
