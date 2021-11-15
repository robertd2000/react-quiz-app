import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGame } from '../redux/reducer'
import { RootApp } from '../types'
import EndGameItem from './EndGameItem'
import GameCard from './GameCard'

const StartPage = () => {
  const categories = useSelector((state: RootApp) => state.reducer.categories)
  const score = useSelector((state: RootApp) => state.reducer.score)

  const currentQuestions = useSelector(
    (state: RootApp) => state.reducer.currentQuestions
  )
  const isStarted = useSelector((state: RootApp) => state.reducer.isStarted)
  const isEnded = useSelector((state: RootApp) => state.reducer.isEnded)

  const dispatch = useDispatch()
  const handler = (type: String) => {
    dispatch(startGame(type))
    // setList()
  }

  return (
    <div>
      <Grid
        //   className="container"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
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
