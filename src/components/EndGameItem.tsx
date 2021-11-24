import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newGame } from '../redux/reducer'
import { RootApp } from '../types'

const EndGameItem = () => {
  const score = useSelector((state: RootApp) => state.reducer.score)
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(newGame(true))
  }
  return (
    <Card sx={{ maxWidth: 445, margin: '50px auto' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="./assets/congrads.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Игра окончена!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ваш счет: {score}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={clickHandler}
          style={{ margin: '0 auto' }}
        >
          Попробовать еще раз
        </Button>
      </CardActions>
    </Card>
  )
}

export default EndGameItem
