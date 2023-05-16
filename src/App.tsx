
//import { useState } from 'react'
import './App.css'
import CharacterInfo from './components/CharacterInfo'

// function ErrorFallback({error, resetErrorBoundary}: any) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }
// const logError = (error: Error, info: { componentStack: string }) => {
//   console.log(error.message+info);
// };
// function Bomb(explode:any) {
//   return (
//     <>
//      {explode? new Error('💥 CABOOM 💥'): '💥 Ok 💥' } 
//     </>
//   )
// }

export default function App() {
  //const [explode, setExplode] = useState(false)
  return (
    <div>
        <CharacterInfo />
    </div>
  )
}