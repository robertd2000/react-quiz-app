import { createSlice } from '@reduxjs/toolkit'
import { InitialStateType } from '../types'

const initialState = {
  questions: {
    history: [
      {
        text: 'Как звали любимого коня Александра Великого?',
        img: './assets/0-1.jpg',
        answers: ['Буцефал', 'Боцык', 'Тхожей', 'Филипп'],
        right: 0,
        id: 1,
      },
      {
        text: 'Как звали короля, завоевавшего Англию в 1066 году?',
        answers: ['Иоанн', 'Карл', 'Вильгельм', 'Георг'],
        img: './assets/wilgelm.webp',
        right: 2,
        id: 2,
      },
      {
        text: 'Какую битву проиграл Ганнибал Сципиону?',
        answers: ['При Каннах', 'При Заме', 'При Гавгамелах', 'При Риме'],
        img: './assets/hanibal.jpg',
        right: 1,
        id: 3,
      },
      {
        text: 'Как называлась первая ядерная бомба, сброшенная на Хиросиму?',
        img: './assets/Little_boy.jpg',
        answers: ['Толстяк', 'Здоровяк', 'Добряк', 'Малыш'],
        right: 3,
        id: 4,
      },
      {
        text: 'В каком году началась Великая Отечественная война?',
        img: './assets/vov.jpg',
        answers: ['1945', '1939', '1941', '1943'],
        right: 2,
        id: 5,
      },
    ],
    programming: [
      {
        text: 'В честь чего был назван язык Python?',
        answers: ['ТВ передачи', 'Змеи', 'Слона', 'Фамилии разработчика'],
        img: './assets/py.png',
        right: 0,
        id: 1,
      },
      {
        text: 'В какой спецификации JS появились классы?',
        answers: ['ES6', 'ES7', 'ES8', 'ES5'],
        right: 0,
        img: './assets/class.jpg',
        id: 2,
      },
      {
        text: 'Верно ли сравнение: "ёжик" > "яблоко" в JS?',
        answers: ['да', 'нет', 'Зависит от локальных настроек браузера.'],
        right: 0,
        img: './assets/edjz.jpg',
        id: 3,
      },
      {
        text: 'Язык гипертекстовой разметки:',
        answers: ['JavaScript', 'HTML', 'JAVA', 'C++'],
        right: 1,
        img: './assets/html.png',
        id: 4,
      },
      {
        text: 'Какая опреационная система используется в компьютерах Apple?',
        answers: ['MacOS', 'Windows', 'IOS', 'Android'],
        right: 0,
        img: './assets/0-1.jpg',
        id: 5,
      },
    ],
    myphes: [
      {
        text: 'Как звали коня Сосруко?',
        answers: ['Шхьоуей', 'Боцык', 'Тхожей', 'Армес'],
        img: './assets/sosruko.jpg',
        right: 2,
        id: 1,
      },
      {
        text: 'Какой герой нартского эпоса погиб от стрелы?',
        img: './assets/badinoko.jpg',
        answers: ['Бадыноко', 'Ашамаз', 'Сосруко', 'Бэтэрэз'],
        right: 0,
        id: 2,
      },
      {
        text: 'Что означает имя Кухулин?',
        answers: ['Бык Кулана', 'Лев Кулана', 'Пес Кулана', 'Орел Кулана'],
        right: 2,
        id: 3,
        img: './assets/Cuinbattle.jpg',
      },
      {
        text: 'Сколько подвигов совершил Геракл?',
        answers: ['13 подвигов', '12 подвигов', '3 подвига', '1 подвиг'],
        right: 1,
        id: 4,
        img: './assets/12-1.jpg',
      },
    ],
  },
  currentQuestions: [],
  currentQues: 0,
  chosedAnswer: 0,
  categories: [
    { name: 'История', type: 'history', id: 1 },
    { name: 'Программирование', type: 'programming', id: 2 },
    { name: 'Мифы и легенды', type: 'myphes', id: 3 },
  ],
  score: 0,
  isStarted: false,
  isEnded: false,
  gameType: 'short',
  longGame: 1,
  accessableCategories: [
    { name: 'История', type: 'history', id: 1 },
    { name: 'Программирование', type: 'programming', id: 2 },
    { name: 'Мифы и легенды', type: 'myphes', id: 3 },
  ],
}

const newQuestions = (arr: any) => {
  const newArr: any = []
  if (arr.length <= 3) {
    return arr
  }
  while (newArr.length !== 3) {
    let j = Math.round(Math.random() * arr.length - 1)
    if (!newArr.includes(arr[j]) && j > 0) {
      newArr.push(arr[j])
    }
    if (j in newArr) {
      continue
    }
  }

  return newArr
}

const endGame = (state: InitialStateType) => {
  if (state.currentQues === 3 && state.gameType === 'short') {
    state.isStarted = false
    state.isEnded = true
    state.currentQues = 0
    state.accessableCategories = state.categories
  }
}

const endLongGame = (state: InitialStateType) => {
  if (state.currentQues === 3 && state.gameType === 'long') {
    state.isStarted = false
    state.isEnded = false
    state.currentQues = 0
    if (state.longGame >= 3) {
      state.isEnded = true
      state.accessableCategories = state.categories
    }
    state.longGame += 1
  }
}

const TestSlice = createSlice({
  name: 'test',
  initialState: initialState as InitialStateType,
  reducers: {
    startGame(state, action) {
      const type: string = action.payload
      state.currentQuestions = newQuestions(state.questions[type])
      state.accessableCategories = state.accessableCategories.filter(
        (i) => i.type !== type
      )
      state.isStarted = true
    },
    nextQuestion(state, action) {
      state.currentQues = state.currentQues + 1
      endGame(state)
      endLongGame(state)

      if (
        state.currentQuestions[action.payload.question].right ===
        action.payload.i
      ) {
        state.score = state.score + 1
      }
    },
    newGame(state, action) {
      state.isEnded = false
      state.score = 0
      state.currentQues = 0
    },
    selectGameType(state, action) {
      state.gameType = action.payload
    },
  },
})

export const { startGame, nextQuestion, newGame, selectGameType } =
  TestSlice.actions
export default TestSlice.reducer
