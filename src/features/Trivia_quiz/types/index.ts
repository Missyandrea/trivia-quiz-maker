export type Category = {
  id: string;
  name: string;
};

export type Result = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export interface ShuffledQuiz {
  id: string;
  shuffledAnswers: string[];
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export type QuizResponse = {
  response_code: number;
  results: Result[];
};

export type TQuery = {
  category: string;
  difficulty: string;
};
