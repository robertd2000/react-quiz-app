import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectGameType, startGame } from '../redux/reducer'
import { RootApp } from '../types'
import EndGameItem from './EndGameItem'
import GameCard from './GameCard'

const StartPage = () => {
  const categories = useSelector(
    (state: RootApp) => state.reducer.accessableCategories
  )
  const score = useSelector((state: RootApp) => state.reducer.score)
  const gameType = useSelector((state: RootApp) => state.reducer.gameType)

  const currentQuestions = useSelector(
    (state: RootApp) => state.reducer.currentQuestions
  )
  const isStarted = useSelector((state: RootApp) => state.reducer.isStarted)
  const isEnded = useSelector((state: RootApp) => state.reducer.isEnded)
  const longGameIter = useSelector((state: RootApp) => state.reducer.longGame)
  const dispatch = useDispatch()
  const handler = (type: String) => {
    dispatch(startGame(type))
  }

  const selectType = (e: any) => {
    dispatch(selectGameType(e.target.value))
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {isStarted && (
          <>
            <Grid item xs={12}>
              <h2>Счет: {score}</h2>
            </Grid>
            <Grid item xs={12}>
              <GameCard questions={currentQuestions} />
            </Grid>
          </>
        )}

        {!isStarted && !isEnded && (
          <>
            <Grid item xs={12}>
              <h1>Выберите категорию</h1>
            </Grid>
            {longGameIter <= 1 && (
              <Grid item xs={12}>
                <RadioGroup
                  value={gameType}
                  row
                  name="radio-buttons-group"
                  onChange={selectType}
                >
                  <FormControlLabel
                    label="короткая"
                    control={<Radio />}
                    value="short"
                  />
                  <FormControlLabel
                    label="длинная"
                    control={<Radio />}
                    value="long"
                  />
                </RadioGroup>
              </Grid>
            )}

            {categories.map((c) => (
              <Grid key={c.name} item xs={6}>
                <Button
                  onClick={() => handler(c.type)}
                  className="category"
                  variant="outlined"
                >
                  {c.name}
                </Button>
              </Grid>
            ))}
          </>
        )}

        {isEnded && <EndGameItem />}
      </Grid>
    </div>
  )
}

export default StartPage
