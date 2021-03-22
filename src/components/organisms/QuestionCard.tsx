import React from "react";
import styled, { keyframes, css } from "styled-components";
import color from "../../styles/variables";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
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
  border-bottom: 1px solid ${color.extraLightGrey};
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 10px;
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

const blinking = keyframes` 
  0% {opacity: 1;}
  25% {opacity: 0.5;} 
  50% {opacity: 1;}
  75% {opacity: 0.5;}  
  100% {opacity: 1;}
`;

const blinkingAnimation = css`
  animation: ${blinking} 0.75s;
`;

const AnswersButton = styled.div<ButtonWrapperProps>`
  button {
    ${({ correct }) => correct && blinkingAnimation}
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
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 10px 20px;
    margin: 5px 0;
    min-height: 45px;
    outline: none;
    width: 100%;

    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;
