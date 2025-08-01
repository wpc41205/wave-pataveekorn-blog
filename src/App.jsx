import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1 className='text-3xl font-bold'>
        My First React App on Vite
      </h1>
    </section>
  )
}

export default App
