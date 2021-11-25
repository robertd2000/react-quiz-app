import { useSelector } from 'react-redux'
import { RootApp } from '../types'
import QuestionCard from './QuestionCard'

const GameCard = ({ questions }: any) => {
  const question = useSelector((state: RootApp) => state.reducer.currentQues)

  return (
    <div style={{ margin: '0 auto' }}>
      <QuestionCard data={questions[question]} />
    </div>
  )
}

export default GameCard
