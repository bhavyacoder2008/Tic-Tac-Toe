import Box from "./components/Box"
import Header from "./components/Header"
import { useState } from "react"
function App() {
  const [array, setArray] = useState(Array(9).fill(null));
  const [winner, setwinner] = useState(null)
  const [currentuser, setCurrentuser] = useState("X")
  const winningPositions = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];


  function firse(){
    setArray(Array(9).fill(null))
    setwinner(null)
    setCurrentuser("X")
  }


  function CheckWinner(newarry){
    for(let pos of winningPositions){
      let [a,b,c] = pos;

      if(newarry[a] && newarry[a] == newarry[b] && newarry[a]== newarry[c]){ //naye board par check hoga na ki purane par isliye newarry na ki array
        // setwinner(newarry[a]) normal calclation wale functuon mein setter nahi kar sakte call
        return newarry[a] //using for of loop because for each loop dont allow us to return 
      }
    }
    return null

  }


  function Clickwala(id){
    
    if(winner || array[id] != null){ return} //idhar or isliye daala taaki agar winner ho to bi ui update na ho
    if(currentuser == "X"){
      setCurrentuser("O")   
    }
    else{
      setCurrentuser("X")
    }
    const newarr = [...array];
    newarr[id] = currentuser
    let abc = CheckWinner(newarr)
    setArray(newarr)
    if(abc){ //idhar ....   and  
      setwinner(abc)
      return
    }
    // setArray(newarr) ye neeche nahi upar aayega taaki ui mein update hoye winning state


  }


  return (
    <>
      <Header />
      <Box array = {array} fun={Clickwala}/>
      {
        winner ? <p> Winner is : {winner} <br /><button onClick={firse}>Restart</button></p> : <p>Next Move : {currentuser}</p> // winner ki value truthy tabhi hogi jab abc truthy hoga and wo truthy tabhi hoga jab Checkwinner(newarr) ek truthy valuye return karega and wo tabhi return karega jab game jeetenge
      }
    </>
  )
}

export default App
