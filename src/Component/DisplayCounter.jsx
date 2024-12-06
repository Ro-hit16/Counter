import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
  const Counter = useSelector(store => store.counter);

  return (
    <p className="lead mb-4">Counter Value is : {Counter}</p>
  )
}

export default DisplayCounter