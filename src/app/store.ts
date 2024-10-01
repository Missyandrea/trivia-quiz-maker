import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/Trivia_quiz/quizSlice"


export const store = configureStore({
    reducer:{
        quiz: quizReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch