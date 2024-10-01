import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizResponse, ShuffledQuiz, TQuery } from "./types";
import axios from "axios";
import { shuffle } from "./utils";

const initialState: ShuffledQuiz[] = [];

export const fetchQuizData = createAsyncThunk(
  "quizSlice/fetchQuizData",
  async ({ category, difficulty }: TQuery) => {
    const queryParams = new URLSearchParams();

    queryParams.append("category", category);
    queryParams.append("difficulty", difficulty);

    try {
      const res = await axios(
        `https://opentdb.com/api.php?${queryParams.toString()}&amount=5&type=multiple`
      );
      return res.data;
      
    } catch (error) {
      console.log(error); //comming back
    }
  }
);

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchQuizData.fulfilled,
      (state, action: PayloadAction<QuizResponse>) => {
        state = action.payload.results.map((quiz, index) => {
          const { question, correct_answer, incorrect_answers } = quiz;
          const shuffledAnswers = shuffle([
            quiz.correct_answer,
            ...quiz.incorrect_answers,
          ]);
          return {
            question,
            correct_answer,
            incorrect_answers,
            shuffledAnswers,
            id: index.toString(),
          };
        });
        return state;
      }
    );
  },
});

export default quizSlice.reducer;
