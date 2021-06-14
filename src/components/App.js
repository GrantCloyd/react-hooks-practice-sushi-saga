import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import AddMoney from "./AddMoney"

const API = "http://localhost:3001/sushis/"

function App() {
   const [sushi, setSushi] = useState([])
   const [money, setMoney] = useState(150)
   const [isBroke, setIsBroke] = useState(false)
   const [eatenSushi, setIsEatenSushi] = useState([])

   const handleAddMoneyToWallet = value => {
      let newAmount = Number(money) + Number(value)
      setMoney(newAmount)
   }

   useEffect(() => {
      if (money <= 0) {
         setIsBroke(!isBroke)
      } else {
         setIsBroke(false)
      }
   }, [money])

   const spendMoney = value => {
      let newAmount = money - value
      setMoney(newAmount)
   }

   useEffect(async () => {
      let data = await fetch(API)
      let resp = await data.json()
      setSushi(resp)
   }, [])

   const handleIsEaten = id => {
      let eatenArray = [...eatenSushi, id]
      setIsEatenSushi(eatenArray)
   }
   return (
      <div className="app">
         <SushiContainer
            sushi={sushi}
            handleIsEaten={handleIsEaten}
            spendMoney={spendMoney}
            isBroke={isBroke}
            money={money}
         />
         <Table money={money} setMoney={setMoney} plates={eatenSushi} />
         <AddMoney handleAddMoneyToWallet={handleAddMoneyToWallet} />
      </div>
   )
}

export default App
