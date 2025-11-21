import { useEffect, useRef, useState } from 'react'

function App() {
  const phrases = [
    'Ecco, finalmente la nuova app è pronta!',
    'Scopri libri e poesie con la Montanari App',
    'Immergiti in contenuti unici e poetici',
    'Tutte le storie che ami in un’unica app',
    'Leggi, esplora, e lasciati ispirare',
    'Scarica subito la Montanari App',
  ]

  const [current, setCurrent] = useState(-1)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Start after 1s
    const startTimer = setTimeout(() => setCurrent(0), 1000)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (current === -1) return
    if (current < phrases.length) {
      const t = setTimeout(() => setCurrent((c) => c + 1), 2500)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setShowButton(true), 300)
      return () => clearTimeout(t)
    }
  }, [current, phrases.length])

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FFD400', fontFamily: 'Arial, sans-serif' }}
    >
      <div className="relative w-full max-w-3xl text-center" style={{ color: '#003A8C' }}>
        <div className="relative h-[220px] sm:h-[260px] md:h-[300px]">
          {phrases.map((text, idx) => {
            const isVisible = idx === current || (current > phrases.length - 1 && idx === phrases.length - 1)
            return (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center px-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1s ease-in-out',
                }}
              >
                <p className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-snug">{text}</p>
              </div>
            )
          })}
        </div>

        <button
          onClick={() => window.open('https://drive.google.com/file/d/1mCb6fNwNQSyy179mG34dYvK8IbBV3pqr/view?usp=sharing', '_blank')}
          className="inline-block mt-8 px-8 py-3 rounded-xl text-[1.25rem] font-semibold focus:outline-none focus:ring-4"
          style={{
            backgroundColor: '#003A8C',
            color: '#FFD400',
            opacity: showButton ? 1 : 0,
            transform: `scale(${showButton ? 1 : 0.8})`,
            transition: 'all 1s ease',
          }}
        >
          Download
        </button>
      </div>
    </div>
  )
}

export default App
