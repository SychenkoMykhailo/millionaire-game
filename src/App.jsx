import 'styles/normalize.css'
import 'styles/global.css'
import 'styles/fonts.css'
import 'styles/variables.css'

import Game from 'components/Game'

import { GameProvider } from 'contexts/GameContext'

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
