import React, { useState } from "react";
import { fetchQuizQuestions } from "../../API";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import QuestionCard from "../organisms/QuestionCard";
import ListCategories from "../molecules/ListCategories";
import Coin from "../atoms/SVGR/Coin";

// Types
import { QuestionState } from "../../API";
import ListCategoriesIllustration from "../atoms/SVGR/ListCategoriesIllustration";
import ButtonContainer from "../molecules/ButtonContainer";
import RoundedButton from "../atoms/RoundedButton";
import ListLevels from "../molecules/ListLevels";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const QuestionsQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentDifficulty, setCurrentDifficulty] = useState("easy");
  console.log(currentDifficulty);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setScore(0);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      currentCategory,
      currentDifficulty
    );
    setQuestions(newQuestions);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct && currentDifficulty === "easy") {
        setScore((prev) => prev + 10);
      } else if (correct && currentDifficulty === "medium") {
        setScore((prev) => prev + 20);
      } else if (correct && currentDifficulty === "hard") {
        setScore((prev) => prev + 30);
      }
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

  const changeCategory = () => {
    setGameOver(true);
    setUserAnswers([]);
  };

  return (
    <QuizContainer>
      {!gameOver ? (
        <QuestionValue>
          {currentDifficulty === "easy"
            ? "10"
            : currentDifficulty === "medium"
            ? "20"
            : "30"}
          <Coin />
        </QuestionValue>
      ) : null}

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
        <ButtonContainer title="Next question" onClick={nextQuestion} />
      ) : null}

      {!gameOver &&
      userAnswers.length === TOTAL_QUESTIONS &&
      loading === false ? (
        <ButtonContainer
          buttonOption={
            <RoundedButton
              onClick={changeCategory}
              content={<ListCategoriesIllustration />}
            />
          }
          title="Restart"
          onClick={startQuiz}
        />
      ) : null}

      {gameOver && userAnswers.length === 0 ? (
        <>
          <ScrollContainer>
            <ListLevels
              onClick={(e) => {
                setCurrentDifficulty(e.currentTarget.value);
              }}
            />
            <ListCategories
              onClick={(e) => {
                setCurrentCategory(e.currentTarget.value);
              }}
            />
          </ScrollContainer>
          <ButtonContainer title="Start quiz now" onClick={startQuiz} />
        </>
      ) : null}
    </QuizContainer>
  );
};

export default QuestionsQuiz;

const QuizContainer = styled.div`
  background-color: ${color.offWhite};
  border-radius: 20px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  height: calc(100vh - 130px);
  margin: 0 7.5%;
  padding: 5%;
  position: relative;
`;

const QuestionValue = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  position: absolute;
  right: 5%;

  & svg {
    height: 2.4rem;
    margin-left: 5px;
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  padding: 5%;
  overflow-y: scroll;
`;
