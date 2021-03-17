import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export enum Category {
  ALL = "",
  ANIMALS = "27",
  ANIMEMANGA = "31",
  BOOKS = "10",
  CARTOONS = "32",
  CELEBRITIES = "26",
  COMICS = "29",
  FILM = "11",
  GENERALKNOLEDGE = "9",
  GEOGRAPHY = "22",
  HISTORY = "23",
  MUSIC = "12",
  SCIENCENATURE = "17",
  SPORTS = "21",
  TELEVISION = "14",
  VEHICLES = "28",
  VIDEOGAME = "15",
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  category: Category,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
