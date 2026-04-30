import { useState } from 'react'

import Amazon from './Components/Amazon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Amazon/>
    </>
  )
}

export default App
