import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
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
      <Button color="info" onClick={handleClick}>
        {showAnswer ? 'Get Another Question' : 'Get Answer'}
      </Button>
    </div>
  );
}

export default App;
