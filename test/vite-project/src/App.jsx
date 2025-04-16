import { useState } from 'react'
import Logos from './Logos.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [liked, setliked] = useState(false);

  const toggleLike = () => {
    setliked(!liked);
  };

  return (
    <>
      <Logos />

      <Logos />
   
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

          <button on onClick={toggleLike}>
          {liked? "Liked" : "Dislike"}
        </button>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
