import { Link, useLocation } from "react-router-dom";
import { DisplayQuiz } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const SolutionPage = () => {
  const { state } = useLocation();
  const quizzes = useSelector((state: RootState) => state.quiz);

  const { selectedAnswers } = state as {
    selectedAnswers: { [id: string]: string };
  };

  const correctAnswersCount = quizzes.filter(
    (quiz) => selectedAnswers[quiz.id] === quiz.correct_answer
  ).length;

  const getScoreColor = () => {
    if (correctAnswersCount <= 1) return "bg-red-500";
    if (correctAnswersCount <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1>Solution</h1>
      <DisplayQuiz
        results
        shuffledQuiz={quizzes}
        selectedAnswers={selectedAnswers}
      ></DisplayQuiz>
      <div className={` ${getScoreColor()}` }>
        You scored {correctAnswersCount} out of {quizzes.length}
      </div>
      <Link
        className="bg-gray-400 text-white rounded-md w-3/4 text-center"
        to={"/new_quiz"}
      >
        Create New quiz
      </Link>
    </div>
  );
};
