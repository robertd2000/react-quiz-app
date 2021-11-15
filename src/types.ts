export type questionType = {
  text: String
  img: String | any
  answers: String[]
  right: Number
  id: Number
}

export type categoryType = {
  name: any
  type: String
  id: Number
}

export type InitialStateType = {
  //   questions: {
  //     history: questionType[]
  //   }
  questions: any
  currentQuestions: Array<questionType>
  currentQues: number
  categories: categoryType[]
  score: number
  isStarted: Boolean
  isEnded: Boolean
}

export type RootApp = {
  reducer: InitialStateType
}
