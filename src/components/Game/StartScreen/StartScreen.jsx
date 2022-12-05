import useGameContext from 'contexts/GameContext'

import MessageScreen from 'uikit/MessageScreen'
import Portal from 'components/Portal'

const StartScreen = () => {
  const { handleStart } = useGameContext()

  return (
    <Portal id="start-screen">
      <MessageScreen
        isGradientBg
        title="Who wants to be a millionaire?"
        btnTitle="Start"
        onButtonClick={handleStart}
      />
    </Portal>
  )
}

export default StartScreen
