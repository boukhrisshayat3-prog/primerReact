import React from 'react'

function Bouchra() {
  const name: string = 'Bouchra'
  const age: number = 28
  const jobs: string[] = ['developer', 'designer', 'manager']
  
  return (
    <div>I'm {name}, i'm {age} years old, jobs: {jobs.join(', ')}</div>
  )
}

export default Bouchra