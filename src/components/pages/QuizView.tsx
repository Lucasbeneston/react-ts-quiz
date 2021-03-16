import React, { useState } from "react";
import { fetchQuizQuestions } from "../../API";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import QuestionCard from "../organisms/QuestionCard";
import StartButton from "../atoms/StartButton";

// Types
import { QuestionState, Difficulty } from "../../API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const QuestionsQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <QuizContainer>
      {!gameOver ? <p>Score : {score}</p> : null}

      {loading && <p>Loading questions ...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <StartButton onClick={nextQuestion} title="Next question" />
      ) : // <button onClick={nextQuestion}>Next question</button>
      null}

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <StartButton onClick={startQuiz} title="Start quiz now" />
      ) : null}
    </QuizContainer>
  );
};

export default QuestionsQuiz;

const QuizContainer = styled.div`
  background-color: ${color.offWhite};
  border-radius: 20px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 5%;
  margin: 0 7.5%;
  min-height: calc(100vh - 130px);
  position: relative;
`;
