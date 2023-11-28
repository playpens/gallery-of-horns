import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header.jsx';

// brings in a CSS file, raw
// this is the same as <link rel="stylesheet" ... />
import './index.css'

// This is a CSS "module" which turns the CSS
// into an object. You must name it!
import aBunchOfStuff from './john.module.css';


// "inline" object that kinda looks like CSS
const styles = {
  purple: {
    backgroundColor: 'rebeccapurple'
  }
};

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={styles.purple}>
        This is a bunch of stuff
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
