import React, { useState } from 'react';
import './App.css';
// import tamo from 'tamo.jpg';

function App() {
  const questions = [
    {
      questionText: 'საყვარელი ფერი',
      answerOptions: [
        { answerText: 'ცისფერი', isCorrect: false },
        { answerText: 'მწვანე', isCorrect: false },
        { answerText: 'ფორთოხლისფერი', isCorrect: true },
        { answerText: 'ყვითელი', isCorrect: false },
      ],
    },
    {
      questionText: 'ფავორიტი წიგნი',
      answerOptions: [
        { answerText: 'სამი მეგობარი', isCorrect: false },
        { answerText: 'სამი გოჭი', isCorrect: false },
        { answerText: 'ძმები კარამაზოვები', isCorrect: true },
        { answerText: 'დათა თუთაშხია', isCorrect: false },
      ],
    },
    {
      questionText: 'მთავარი ფასეულობა',
      answerOptions: [
        { answerText: 'ერთგულება', isCorrect: false },
        { answerText: 'სიყვარული', isCorrect: true },
        { answerText: 'კაცთმოყვარეობა', isCorrect: false },
        { answerText: 'სიკეთე', isCorrect: false },
      ],
    },
    {
      questionText: 'მომხიბვლელობის მთავარი ელემენტი ქალში',
      answerOptions: [
        { answerText: 'ღიმილი', isCorrect: false },
        { answerText: 'ლოყები', isCorrect: false },
        { answerText: 'ინტელექტი', isCorrect: true },
        { answerText: 'ძუძუები', isCorrect: false },
      ],
    },
    {
      questionText: 'სიმშვიდის წყარო',
      answerOptions: [
        { answerText: 'თამო', isCorrect: false },
        { answerText: 'თამარი', isCorrect: false },
        { answerText: 'თამჩაჩო', isCorrect: true },
        { answerText: 'თამჩექსა', isCorrect: false },
      ],
    },
    {
      questionText: 'საყვარელი სპორტი',
      answerOptions: [
        { answerText: 'ფეხბურთი', isCorrect: false },
        { answerText: 'კალათბურთი', isCorrect: true },
        { answerText: 'ენეფელი', isCorrect: false },
        { answerText: 'ჩოგბურთი', isCorrect: false },
      ],
    },
  ];

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
