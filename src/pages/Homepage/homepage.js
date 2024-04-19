import React, { useState } from 'react'
import Loading from '../../components/loading/loading'

function Homepage() {
  const [loading, setLoading] = useState(true)

  // infinite loop
const show = () => {
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}
  // infinite loop

  return loading? (
    <>
    
    <div className='center'>
      <Loading />
    </div>

    {show()}
    
    </>
  ):
  <>
    <div>Homepage</div>
  </>
}

export default Homepage