import { ShuffledQuiz } from "../types";

type TProps = {
  results?: boolean;
  selectedAnswers: {
    [id: string]: string;
  };
  shuffledQuiz: ShuffledQuiz[];
  onClick?: (id: string, answer: string) => void;
};

export const DisplayQuiz = ({
  results,
  selectedAnswers,
  shuffledQuiz,
  onClick,
}: TProps) => {
  const buttonStyle = (id: string, correct_answer: string, answer: string) => {
    const selectedAnswer = selectedAnswers![id];
    if (results) {
      if (answer === correct_answer) return "bg-green-400 text-white";
      if (selectedAnswer === answer && answer !== correct_answer)
        return "bg-red-500 text-white";
    }
    if (selectedAnswer === answer) return "bg-green-400 text-white";
    return "border-solid hover:bg-green-400 hover:text-white border-green-400 border-2 text-green-600";
  };

  return (
    <div>
      {shuffledQuiz.map((quiz, index) => (
        <div className="space-y-3" key={index}>
          <p dangerouslySetInnerHTML={{ __html: `${quiz.question}`}}></p>
          {quiz.shuffledAnswers.map((answer) => (
            <button 
            dangerouslySetInnerHTML={{ __html: `${answer}`}}
              className={`ml-4 rounded-md p-2 ${buttonStyle(
                `${quiz.id}`,
                quiz.correct_answer,
                answer
              )}`}
              key={answer}
              onClick={() => onClick!(`${quiz.id}`, answer)}
            >
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
