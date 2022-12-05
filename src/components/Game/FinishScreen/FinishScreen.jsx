import useGameContext from 'contexts/GameContext'

import MessageScreen from 'uikit/MessageScreen'
import Portal from 'components/Portal'

import { formatNumberToNumberWithCommas } from 'utils/helpers'

const FinishScreen = ({ reward }) => {
  const { handleRestart } = useGameContext()

  const rewardFormated = formatNumberToNumberWithCommas(reward)

  return (
    <Portal id="end-screen">
      <MessageScreen
        supTitle="Total score:"
        title={`$${rewardFormated} earned`}
        btnTitle="Try again"
        onButtonClick={handleRestart}
      />
    </Portal>
  )
}

export default FinishScreen
