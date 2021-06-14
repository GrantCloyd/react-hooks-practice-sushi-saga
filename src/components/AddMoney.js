import React from "react"

export default function AddMoney({ handleAddMoneyToWallet }) {
   const handleAddMoney = e => {
      e.preventDefault()
      let value = e.target.amount.value

      handleAddMoneyToWallet(value)
      e.target.amount.value = 0
   }

   return (
      <>
         <form onSubmit={handleAddMoney}>
            <input name="amount" type="number" min="0" placeholder="Add to wallet"></input>
            <button className="addMoney">
               <span>💵</span>Add Money
            </button>
         </form>
      </>
   )
}
