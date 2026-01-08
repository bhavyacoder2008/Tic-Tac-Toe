import React from 'react'

export default function Square({idx , disp , fun}) {
  return (
    <div className='square' onClick={()=>fun(idx)}>{disp}</div> //aap onclick ek function call karo jo ek or function call kare jiske andar ek parameter ho idx
  )
}
