import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './App.css'

gsap.registerPlugin(useGSAP)

function App() {
    const container = useRef(null)

    useGSAP(
        () => {
            gsap.to('.box', { x: 200 })
            gsap.to('.to-circle', {
                duration: 1.1,
                ease: 'none',
                x: 40,
                fill: '#00bae2',
            })
            gsap.from('.from-circle', {
                duration: 1.1,
                ease: 'none',
                x: -40,
                fill: '#00bae2',
            })
            gsap.fromTo(
                '.fromTo-circle',
                { x: -40, fill: '#00bae2' },
                { duration: 1.5, ease: 'none', x: 40, fill: '#0ae448' }
            )
            gsap.to('.set-circle', { x: 40, fill: '#00bae2' })
        },
        { scope: container }
    )

    return (
        <>
            <div ref={container}>
                <div className="box green"></div>
                <h3>A simple to</h3>
                <svg viewBox="0 0 100 20">
                    <circle
                        className="outline from-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="10"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline center-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="50"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline to-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="90"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="to-circle"
                        stroke-width="0.3"
                        fill="#0ae448"
                        cx="50"
                        cy="10"
                        r="10"
                    />
                </svg>
                <h3>A simple from</h3>
                <svg viewBox="0 0 100 20">
                    <circle
                        className="outline from-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="10"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline center-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="50"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline to-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="90"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="from-circle"
                        stroke-width="0.3"
                        fill="#0ae448"
                        cx="50"
                        cy="10"
                        r="10"
                    />
                </svg>
                <h3>A simple fromTo</h3>
                <svg viewBox="0 0 100 20">
                    <circle
                        className="outline from-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="10"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline center-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="50"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline to-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="90"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="fromTo-circle"
                        stroke-width="0.3"
                        fill="#0ae448"
                        cx="50"
                        cy="10"
                        r="10"
                    />
                </svg>
                <h3>A simple set</h3>
                <svg viewBox="0 0 100 20">
                    <circle
                        className="outline from-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="10"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline center-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="50"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="outline to-outline"
                        stroke="grey"
                        fill="none"
                        stroke-dasharray="1.2"
                        stroke-width="0.3"
                        cx="90"
                        cy="10"
                        r="9.7"
                    />
                    <circle
                        className="set-circle"
                        stroke-width="0.3"
                        fill="#0ae448"
                        cx="50"
                        cy="10"
                        r="10"
                    />
                </svg>
            </div>
        </>
    )
}

export default App
