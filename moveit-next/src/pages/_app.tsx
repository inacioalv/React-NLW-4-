import '../styles/global.css'

import {ChallengesProvider} from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return ( 
   
      <Component {...pageProps} /> 
   
  )
}

export default MyApp


// Todos os dados do provider vai ter acesso ao dados do context