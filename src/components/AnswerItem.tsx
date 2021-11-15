import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextQuestion } from '../redux/reducer'
import { RootApp } from '../types'

type AnswerItemType = {
  answers: String[]
}

const AnswerItem: React.FC<AnswerItemType> = ({ answers }) => {
  const dispatch = useDispatch()
  const question = useSelector((state: RootApp) => state.reducer.currentQues)

  const clickHandler = (i: number) => {
    dispatch(nextQuestion({ question, i }))
  }
  console.log(question)

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Варианты ответа</FormLabel>
      <RadioGroup name="radio-buttons-group">
        {answers.map((a: any, i: number) => (
          <FormControlLabel
            key={a}
            onClick={() => clickHandler(i)}
            value={a}
            control={<Radio />}
            label={a}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default AnswerItem
