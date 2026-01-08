import Square from "./Square"
import { useState } from "react"
const Box = ({array , fun}) => {
  return (
    <>
        <div className="Box">
            {
                array.map((val,key) => <Square idx={key} disp = {val} fun = {fun}/>)
            }
        </div>
    </>
  )
}

export default Box