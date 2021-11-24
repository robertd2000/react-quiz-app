export type questionType = {
  text: string
  img: string | any
  answers: string[]
  right: number
  id: number
}

export type categoryType = {
  name: any
  type: string
  id: number
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
  gameType: string
  longGame: number
  accessableCategories: categoryType[]
}

export type RootApp = {
  reducer: InitialStateType
}
