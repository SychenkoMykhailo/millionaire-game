import useGameContext from 'contexts/GameContext'

import StartScreen from './StartScreen'
import FinishScreen from './FinishScreen'
import GameContent from './GameContent'

const Game = () => {
  const { isShowStartScreen, isShowFinishScreen, currentReward } =
    useGameContext()

  if (isShowStartScreen) {
    return <StartScreen />
  }

  if (isShowFinishScreen) {
    return <FinishScreen reward={currentReward} />
  }

  return <GameContent />
}

export default Game
