import React, { useContext, useState } from "react";
import { fetchQuizQuestions } from "../../API";
import GameInformationsContext from "../../contexts/InformationsGameContext";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import QuestionCard from "../organisms/QuestionCard";
import ListCategories from "../molecules/ListCategories";
import Coin from "../atoms/SVGR/Coin";

// Types
import ListCategoriesIllustration from "../atoms/SVGR/ListCategoriesIllustration";
import ButtonContainer from "../molecules/ButtonContainer";
import RoundedButton from "../atoms/RoundedButton";
import ListLevels from "../molecules/ListLevels";

const TOTAL_QUESTIONS = 10;

const QuestionsQuiz = () => {
  const context = useContext(GameInformationsContext);
  const { gameInformations, setGameInformations } = context;

  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentDifficulty, setCurrentDifficulty] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
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

  const checkAnswer = (e) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct && currentDifficulty === "easy") {
        setGameInformations(gameInformations + 1);
      } else if (correct && currentDifficulty === "medium") {
        setGameInformations(gameInformations + 2);
      } else if (correct && currentDifficulty === "hard") {
        setGameInformations(gameInformations + 3);
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
      {loading && <p>Loading questions ...</p>}

      {!loading && !gameOver && (
        <>
          <QuestionValue>
            {currentDifficulty === "easy"
              ? "1"
              : currentDifficulty === "medium"
              ? "2"
              : "3"}
            <Coin />
          </QuestionValue>
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        </>
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
