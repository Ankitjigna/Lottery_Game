import './App.css'
import Lottery from './lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import LotteryGame from './LotteryGame'
import { sum } from './helper'

function App() {
  
  let winCondition = (ticket)=>{
    // return sum(ticket) ===15;
    // return ticket.every((num)=> num===ticket[0]);
    return ticket[0]===0;
  }
  return (
    <>
      {/* <Lottery /> */}
      <LotteryGame n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
