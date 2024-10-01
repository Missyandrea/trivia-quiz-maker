import { useState } from "react";
import { ConfigureQuiz, DisplayQuiz } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useNavigate } from "react-router-dom";

export const NewQuizPage = () => {
  const quizzes = useSelector((state: RootState) => state.quiz);

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [id: string]: string;
  }>({});

  const navigate = useNavigate();

  const handleOnClick = (id: string, answer: string) => {
    setSelectedAnswers((a) => ({
      ...a,
      [id]: answer,
    }));
  };

  const handleSubmit = () => {
    navigate("/solution", {
      state: {
        selectedAnswers,
      },
    });
  };

  const numberOfSelectedAnswers = Object.keys(selectedAnswers!).length;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1>Quiz Maker</h1>
      <ConfigureQuiz></ConfigureQuiz>
      <div className="p-6">
        <DisplayQuiz
          shuffledQuiz={quizzes}
          onClick={handleOnClick}
          selectedAnswers={selectedAnswers}
        ></DisplayQuiz>
      </div>

      {numberOfSelectedAnswers === 5 && (
        <button
          className="bg-gray-400 text-white rounded-md w-3/4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};
