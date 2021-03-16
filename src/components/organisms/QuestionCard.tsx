import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

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
      <QuestionNumber>
        Question {questionNumber}
        <TotalQuestions> / {totalQuestions}</TotalQuestions>
      </QuestionNumber>
      <Question dangerouslySetInnerHTML={{ __html: question }} />
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

const QuestionNumber = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const TotalQuestions = styled.span`
  color: ${color.softGrey};
  font-size: 1.6rem;
`;

const Question = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.6rem;
  margin: 20px 0;
`;

const AnswersButton = styled.div<ButtonWrapperProps>`
  button {
    background-color: ${({ correct, userClicked }) =>
      correct
        ? color.royalBlue
        : !correct && userClicked
        ? color.burningOrange
        : color.offWhite};
    border: 1px solid ${color.softGrey};
    border-radius: 50px;
    color: ${({ correct, userClicked }) =>
      correct || userClicked ? color.offWhite : color.anthraciteGray};
    font-size: 1.6rem;
    font-weight: 600;
    padding: 10px 20px;
    margin: 5px 0;
    min-height: 45px;
    outline: none;
    width: 100%;
  }
`;
