import React, { useState, useEffect } from 'react';
import getQuestions from '../helpers/data/avatarData';
import './App.scss';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    if (showAnswer === true) {
      setShowAnswer(false);
      setSingleQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
    } else {
      setShowAnswer(true);
    }
  };

  useEffect(() => {
    getQuestions()
      .then((questions) => {
        setAllQuestions(questions);
        setSingleQuestion(questions[Math.floor(Math.random() * allQuestions.length)]);
      });
  }, []);

  return (
    <div className='App'>
      {singleQuestion.question}
      <br />
      <p>{showAnswer ? singleQuestion.correctAnswer : ''}</p>
      <button onClick={handleClick}>
        {showAnswer ? 'Get Another Question' : 'Get Answer'}
      </button>
    </div>
  );
}

export default App;
