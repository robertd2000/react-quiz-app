import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import { questionType } from '../types'
import AnswerItem from './AnswerItem'

type QuestionCardType = {
  data: questionType
}

const QuestionCard: React.FC<QuestionCardType> = ({ data }) => {
  const { text, img, answers } = data
  return (
    <Card sx={{ maxWidth: 545, margin: '20px auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}
          </Typography>
          <hr />
          <Typography component="div" variant="body2" color="text.secondary">
            <AnswerItem answers={answers} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default QuestionCard
