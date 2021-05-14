import React, { useState } from 'react';
import './App.css';
import questions from './components/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [showScore, setShowScore] = useState(true);

  const hanldeClickQeustion = answer => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion + 1);

    if (answer) {
      setPoints(prev => prev + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(false);
    }
  };

  const playAgain = () => {
    setCurrentQuestion(0);
    setPoints(0);
    setShowScore(true);
  };

  return (
    <div className='App'>
      {showScore ? (
        <div className='wrapper'>
          <div className='question'>
            {questions[currentQuestion].questionText}
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map((el, i) => {
              return (
                <button
                  className='answer'
                  onClick={() => hanldeClickQeustion(el.isCorrect)}
                  key={i}
                >
                  {el.answerText}
                </button>
              );
            })}
          </div>
          <h3>
            {points} / {questions.length}
          </h3>
        </div>
      ) : (
        <div className='result'>
          <h3>
            თამჩაჩ შენი ქულაა {points} / {questions.length}
          </h3>
          <button onClick={playAgain}>ითამაშე თავიდან</button>
        </div>
      )}
    </div>
  );
}

export default App;
