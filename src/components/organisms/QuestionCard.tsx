import React from "react";
import styled from "styled-components";

// Types
import { AnswerObject } from "../pages/QuizView";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
  key: any;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <AnswersButton
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </AnswersButton>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

const AnswersButton = styled.div<ButtonWrapperProps>`
  button {
    background-color: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "grey"};
    border-radius: 20px;
    height: 40px;
    width: 100%;
  }
`;
