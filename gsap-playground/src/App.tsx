import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './App.css'

gsap.registerPlugin(useGSAP)

function App() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.to('.box', { x: 200 })
  }, { scope: container })

  return (
    <>
      <div ref={container}>
        <div className='box green'></div>
      </div>
    </>
  )
}

export default App
