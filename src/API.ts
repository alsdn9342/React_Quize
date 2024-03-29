import { shuffleArray } from './utils'

export type Question = {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

//Add the prop, answers to the QUestion.
export type QuestionState = Question & {answers: string[]}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizeQuestions = async(amount: number, difficulty: Difficulty ) => {
  const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await(await fetch(endpoint)).json();
  return data.results.map((question: Question) => (
      {
          ...question, 
          answers: shuffleArray([
              ...question.incorrect_answers, 
              question.correct_answers
            ]),
      }
  ))
}