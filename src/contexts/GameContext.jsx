import {
  createContext,
  useMemo,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

import gameData from 'staticData/gameData.json'

// const data = JSON.parse(gameData)

const GameContext = createContext()

const useGameContext = () => {
  const context = useContext(GameContext)

  if (typeof context === undefined) {
    throw new Error('useGameContext must be used within a GameContext')
  }

  return context
}

export const GameProvider = ({ children }) => {
  const [isShowStartScreen, setIsShowStartScreen] = useState(true)
  const [isShowFinishScreen, setIsShowFinishScreen] = useState(false)
  const [currentReward, setCurrentReward] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(
    gameData[currentQuestionIndex],
  )

  const handleStart = () => {
    setIsShowStartScreen(false)
    setCurrentQuestionIndex(0)
  }

  const onFinish = () => setIsShowFinishScreen(true)

  const handleRestart = () => {
    setIsShowFinishScreen(false)
    setIsShowStartScreen(false)
    setCurrentQuestionIndex(0)
    setCurrentReward(0)
  }

  const goNext = () => setCurrentQuestionIndex(prev => prev + 1)

  const onAnswer = useCallback(
    answerId => {
      const { answers = [] } = currentQuestion
      const correctAnswersIds = answers
        ?.filter(({ isCorrect }) => isCorrect)
        .map(({ answerId }) => answerId)

      if (correctAnswersIds.includes(answerId)) {
        setCurrentReward(currentQuestion.reward)
        goNext()
      } else {
        onFinish()
      }
    },
    [currentQuestion],
  )

  useEffect(() => {
    if (!gameData[currentQuestionIndex]) {
      onFinish()
      return
    }
    setCurrentQuestion(gameData[currentQuestionIndex])
  }, [currentQuestionIndex])

  return (
    <GameContext.Provider
      value={{
        gameData,
        currentQuestion,
        currentQuestionIndex,
        currentReward,
        isShowStartScreen,
        isShowFinishScreen,
        onAnswer,
        handleStart,
        handleRestart,
      }}>
      {children}
    </GameContext.Provider>
  )
}

export const GameConsumer = GameContext.Consumer

export default useGameContext
