import { useState } from "react"
import { genTicket } from "./helper";
import { sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryGame ({n = 3, winCondition }){
    const [ticket ,setTicket] = useState(genTicket(n));
    let  isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    
    return (
        <div>
            <h1>Lottery Games!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "congratulations, you won!"}</h3>
        </div>
    )
}