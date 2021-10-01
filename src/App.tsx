import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizeQuestions, Difficulty, QuestionState } from './API';
const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer:string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async() => {
     setLoading(true);
     setGameOver(false);

     const newQuestions = await fetchQuizeQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
     
     setQuestions(newQuestions);
     setScore(0);
     setUserAnswers([]);
     setNumber(0);
     setLoading(false);
    };
  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
       
  }
  
  const nextQuesion = ( ) => {

  }
  return (
    <div className="App">
     <h1>REACT QUIZ</h1>
     <button className="start" onClick={startTrivia}>Start</button>
     <p className="score">Score: </p>
     <p>Loading Questions...</p>
     {/* <QuestionCard 
     questionNum={number + 1}
     totalQuestions={TOTAL_QUESTIONS}
     question={questions[number].question}
     answers={questions[number].answers]}
     userAnswer={userAnswers ? userAnswers[number] : undefined  }
     callback={checkAnswers} /> */}
     <button className="next" onClick={nextQuesion}>Next Question</button>
    </div>
  );
}

export default App;
