import React from 'react'
import CustomCursor from '../components/Global/CustomCursor'
import Header from '../components/Global/Header'
import Example from '../components/Home/Scroll'
import Transition from '../Transition'

const Trending = () => {
  return (
    <div>
      <CustomCursor />
        <Header bgColor={"fff"} delay={"0.6"}/>
        <Example />
    </div>
  )
}

export default Transition(Trending)